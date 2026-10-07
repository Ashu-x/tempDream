import { popularDreams } from "../data/mockDreams";

export function Sidebar() {
  return (
    <aside className="side-column">
      <section className="popular-panel">
        <div className="panel-heading">
          <span className="popular-heading-text">Dreams that are popular among dreamers</span>
          <button className="popular-view-all" type="button">View all</button>
        </div>
        <ul>
          {popularDreams.map(([title, reads]) => (
            <li key={title}>
              <button type="button">
                {title}
                <small>{reads} reads</small>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <div className="moon-note">
        <span>◐</span>
        <p>New dreams arrive while the world sleeps.</p>
      </div>
    </aside>
  );
}

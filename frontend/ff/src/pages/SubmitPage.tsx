import { useState, type FormEvent } from "react";
import { createDreamSchema } from "../schemas/dream.schemas";

export function SubmitPage() {
  const [anonymous, setAnonymous] = useState(true);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = createDreamSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      title: formData.get("title"),
      dream_content: formData.get("dream_content"),
      real_life_context: formData.get("real_life_context"),
      dreamer_interpretation: formData.get("dreamer_interpretation"),
      is_anonymous: formData.get("is_anonymous") === "on",
    });

    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = String(issue.path[0]);
        if (!nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      setSent(false);
      return;
    }

    setErrors({});
    setSent(true);
  };

  return (
    <main className="submit-wrap">
      <div className="submit-copy">
        <span className="eyebrow">Leave a trace</span>
        <h1>Tell us what<br /><em>you dreamed.</em></h1>
        <p>Small details are welcome. The strange ones especially.</p>
      </div>
      <form className="dream-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label>
            Your name
            <input name="name" placeholder="e.g. Mira" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
            {errors.name && <span className="form-error" id="name-error">{errors.name}</span>}
          </label>
          <label>
            Email <span>never displayed</span>
            <input name="email" type="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
            {errors.email && <span className="form-error" id="email-error">{errors.email}</span>}
          </label>
        </div>
        <label className="check-row">
          <input name="is_anonymous" type="checkbox" checked={anonymous} onChange={() => setAnonymous((value) => !value)} />
          <span>Publish anonymously</span>
        </label>
        <label>
          Dream title
          <input name="title" placeholder="Give your dream a name" aria-invalid={Boolean(errors.title)} aria-describedby={errors.title ? "title-error" : undefined} />
          {errors.title && <span className="form-error" id="title-error">{errors.title}</span>}
        </label>
        <label>
          Tell us your dream
          <textarea name="dream_content" rows={6} placeholder="Start wherever you remember it starting…" aria-invalid={Boolean(errors.dream_content)} aria-describedby={errors.dream_content ? "dream-content-error" : undefined} />
          {errors.dream_content && <span className="form-error" id="dream-content-error">{errors.dream_content}</span>}
        </label>
        <label>
          What was happening in your real life?
          <textarea name="real_life_context" rows={3} placeholder="Anything that may have followed you into the dream…" aria-invalid={Boolean(errors.real_life_context)} aria-describedby={errors.real_life_context ? "context-error" : undefined} />
          {errors.real_life_context && <span className="form-error" id="context-error">{errors.real_life_context}</span>}
        </label>
        <label>
          What do you think it means? <span>optional</span>
          <textarea name="dreamer_interpretation" rows={3} placeholder="Your own interpretation…" />
        </label>
        <div className="submit-action">
          <button className="submit-button" type="submit">{sent ? "Dream submitted" : "Submit Dream"}</button>
          <p className="form-note">Your email is never shared or displayed publicly.</p>
        </div>
      </form>
    </main>
  );
}

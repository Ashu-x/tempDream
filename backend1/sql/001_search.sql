CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE OR REPLACE FUNCTION dreams_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', coalesce(NEW."title", '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW."dream_content", '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW."real_life_context", '')), 'C') ||
    setweight(to_tsvector('english', coalesce(NEW."dreamer_interpretation", '')), 'D');
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS dreams_search_vector_trigger ON "Dreams";
CREATE TRIGGER dreams_search_vector_trigger
  BEFORE INSERT OR UPDATE OF "title", "dream_content", "real_life_context", "dreamer_interpretation"
  ON "Dreams"
  FOR EACH ROW
  EXECUTE FUNCTION dreams_search_vector_update();

UPDATE "Dreams" SET "title" = "title";

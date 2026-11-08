import { useEffect, useRef, useState } from "react";
import { books, favoriteBook, learnings, reflections, type Book } from "./data";
import { Icon } from "./Icon";

const navigation = [
  ["home", "Home"],
  ["profile", "Student profile"],
  ["analyses", "Literary analyses"],
  ["favorite", "Favorite work"],
  ["learning", "Learning summary"],
  ["reflection", "Personal reflection"],
];
const analysisTabs = ["Overview", "Themes & ideas", "Personal connection"];

function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`cover-fallback ${className}`}>
      <span>{book.author}</span>
      <strong>{book.title}</strong>
      <Icon name="book" size={32} />
      <span>A LITERARY CLASSIC</span>
    </div>
  ) : (
    <img
      className={`book-cover ${className}`}
      src={book.cover ?? `/images/${book.id}.jpg`}
      alt={`${book.title} book cover`}
      onError={() => setFailed(true)}
    />
  );
}

function AnalysisModal({
  book,
  onClose,
  onBookChange,
}: {
  book: Book;
  onClose: () => void;
  onBookChange: (book: Book) => void;
}) {
  const [tab, setTab] = useState("Overview");
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const opener = document.activeElement;
    dialogRef.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      if (opener instanceof HTMLElement) opener.focus({ preventScroll: true });
    };
  }, []);
  const index = books.findIndex((item) => item.id === book.id);
  return (
    <dialog
      ref={dialogRef}
      className="analysis-modal"
      onCancel={onClose}
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.target === event.currentTarget &&
          (event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom)
        )
          onClose();
      }}
      aria-labelledby="analysis-title"
    >
      <button className="modal-close" onClick={onClose} aria-label="Close analysis">
        <Icon name="close" />
      </button>
      <div className="modal-heading">
        <div className="modal-book" style={{ backgroundColor: book.color }}>
          <BookCover key={book.id} book={book} />
        </div>
        <div>
          <span className="eyebrow">
            LITERARY ANALYSIS · {String(index + 1).padStart(2, "0")} / 07
          </span>
          <h2 id="analysis-title">{book.title}</h2>
          <p>
            {book.author} <span className="muted">· {book.year}</span>
          </p>
          <span className="lens-tag">{book.lens} lens</span>
        </div>
      </div>
      <div className="analysis-tabs" role="tablist" aria-label="Analysis sections">
        {analysisTabs.map((item, tabIndex) => (
          <button
            id={`analysis-tab-${tabIndex}`}
            role="tab"
            aria-selected={tab === item}
            aria-controls="analysis-panel"
            tabIndex={tab === item ? 0 : -1}
            key={item}
            onClick={() => setTab(item)}
            onKeyDown={(event) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              const next =
                event.key === "Home"
                  ? 0
                  : event.key === "End"
                    ? 2
                    : (tabIndex + (event.key === "ArrowRight" ? 1 : -1) + 3) % 3;
              setTab(analysisTabs[next]);
              document.getElementById(`analysis-tab-${next}`)?.focus();
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        id="analysis-panel"
        className="analysis-body"
        role="tabpanel"
        aria-labelledby={`analysis-tab-${analysisTabs.indexOf(tab)}`}
      >
        {tab === "Overview" && (
          <>
            <h3>Between the lines</h3>
            <p>{book.overview}</p>
            {book.quote && (
              <blockquote>
                “{book.quote}”<cite>— {book.quoteSource ?? book.author}</cite>
              </blockquote>
            )}
          </>
        )}
        {tab === "Themes & ideas" &&
          book.themes.map((theme, i) => (
            <div className="theme" key={theme.title}>
              <span>0{i + 1}</span>
              <div>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </div>
            </div>
          ))}
        {tab === "Personal connection" && (
          <>
            <span className="eyebrow">WHAT I’M TAKING WITH ME</span>
            <h3>A work that stays</h3>
            <p>{book.reflection}</p>
            <div className="connection-note">
              <Icon name="sprout" />
              <span>
                Reading is only the beginning. The real learning happens in the way we live
                afterward.
              </span>
            </div>
          </>
        )}
      </div>
      <div className="modal-footer">
        <span>
          {book.category} <span className="footer-dot">·</span> {book.lens}
        </span>
        <button
          className="text-link"
          onClick={() => {
            setTab("Overview");
            onBookChange(books[(index + 1) % books.length]);
            dialogRef.current?.scrollTo({ top: 0, behavior: "instant" });
          }}
        >
          Next analysis <Icon name="arrow" size={17} />
        </button>
      </div>
    </dialog>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All works");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [learningOpen, setLearningOpen] = useState<number | null>(null);
  const [reflectionOpen, setReflectionOpen] = useState<number | null>(null);
  const shownBooks = books.filter((book) => filter === "All works" || book.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveNav(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    navigation.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand" aria-label="My Literary Journey home">
            <span className="brand-mark">
              <Icon name="book" size={27} />
            </span>
            <span>
              <strong>
                My Literary Journey<span className="brand-period">.</span>
              </strong>
              <small>A GREAT BOOKS PORTFOLIO</small>
            </span>
          </a>
          <button
            className="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
          <nav
            className={menuOpen ? "navigation is-open" : "navigation"}
            aria-label="Main navigation"
          >
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeNav === id ? "active" : ""}
                onClick={() => {
                  setActiveNav(id);
                  setMenuOpen(false);
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            className="hero-photo"
            src="/images/library.jpg"
            alt="Sunlit shelves and quiet reading spaces in a historic library"
          />
          <div className="hero-shade" />
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow">
                <span /> SEVEN WORKS. COUNTLESS PERSPECTIVES.
              </span>
              <h1>
                Between pages,
                <br />
                <em>beyond perspectives.</em>
              </h1>
              <p>
                A collection of stories that challenged my thinking,
                <br className="desktop-break" /> deepened my empathy, and helped me find my voice.
              </p>
              <a className="gold-button" href="#analyses">
                Explore my journey <Icon name="arrow" size={17} />
              </a>
            </div>
            <div className="hero-quote">
              <Icon name="quote" size={30} />
              <p>
                “A reader lives a thousand lives
                <br /> before he dies.”
              </p>
              <span>GEORGE R. R. MARTIN</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>AN EXPLORATION OF LITERATURE & THE HUMAN EXPERIENCE</span>
            <span>
              BS INFORMATION TECHNOLOGY <span className="small-diamond" /> 2025—2026
            </span>
          </div>
        </section>

        <div className="page-content">
          <div className="portfolio-layout">
            <aside className="profile-card" id="profile">
              <div className="profile-top">
                <span className="eyebrow">THE READER BEHIND THE PAGES</span>
                <div className="portrait-ring">
                  <img src="/images/profile.jpg" alt="John Ray M. Amaro" />
                </div>
                <h2>John Ray M. Amaro</h2>
                <p>BS Information Technology</p>
                <span className="student-detail">
                  4th Year <span>·</span> Section Great Books 1454
                </span>
                <div className="profile-rule">
                  <span />
                  <Icon name="book" size={17} />
                  <span />
                </div>
                <p className="profile-motto">
                  A curious mind.
                  <br />
                  An ever-growing bookshelf.
                </p>
              </div>
              <div className="profile-about">
                <h3>A little about me</h3>
                <div className="about-item">
                  <span className="round-icon">
                    <Icon name="heart" size={18} />
                  </span>
                  <div>
                    <h4>Passionate reader</h4>
                    <p>Finding pieces of myself in stories, and new worlds in every chapter.</p>
                  </div>
                </div>
                <div className="about-item">
                  <span className="round-icon">
                    <Icon name="stack" size={18} />
                  </span>
                  <div>
                    <h4>Endlessly curious</h4>
                    <p>
                      Drawn to classic literature, thoughtful conversations, and the “why” behind
                      the words.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <span className="round-icon">
                    <Icon name="sprout" size={18} />
                  </span>
                  <div>
                    <h4>Always becoming</h4>
                    <p>Learning to read critically, feel deeply, and see a little differently.</p>
                  </div>
                </div>
              </div>
              <div className="profile-footer">
                <span className="status-dot" /> OPEN TO NEW PERSPECTIVES
              </div>
            </aside>

            <section className="analyses-section" id="analyses">
              <div className="section-label">
                <span className="eyebrow">THE READING COLLECTION</span>
                <span className="work-count">07 WORKS</span>
              </div>
              <h2 className="section-title">A world in every work.</h2>
              <p className="section-description">
                Seven literary worlds. Seven ways of seeing our own.
              </p>
              <div className="collection-toolbar">
                <div className="filter-tabs" role="tablist" aria-label="Filter literary works">
                  {["All works", "Prose", "Poetry"].map((item) => (
                    <button
                      key={item}
                      role="tab"
                      aria-selected={filter === item}
                      onClick={() => setFilter(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <Icon name="book" size={17} />
              </div>
              <div className="book-grid" role="tabpanel" aria-label={`${filter} collection`}>
                {shownBooks.map((book) => (
                  <button
                    className="book-card"
                    key={book.id}
                    onClick={() => setSelectedBook(book)}
                    aria-label={`Read ${book.title} analysis`}
                  >
                    <div className="book-stage" style={{ backgroundColor: book.color }}>
                      <span className="book-number">
                        {String(books.indexOf(book) + 1).padStart(2, "0")}
                      </span>
                      <BookCover book={book} />
                      <span className="book-open">
                        <Icon name="diagonal" size={16} />
                      </span>
                    </div>
                    <div className="book-info">
                      <span className="book-author">{book.author}</span>
                      <h3>{book.title}</h3>
                      <span className="book-lens">{book.lens}</span>
                      <p>{book.description}</p>
                      <span className="read-analysis">
                        Read analysis <Icon name="arrow" size={14} />
                      </span>
                    </div>
                  </button>
                ))}
                {filter === "All works" && (
                  <div className="collection-note">
                    <Icon name="quote" size={26} />
                    <p>
                      Different stories.
                      <br />
                      Shared humanity.
                    </p>
                    <span>
                      THE THREAD THAT
                      <br />
                      CONNECTS THEM ALL
                    </span>
                    <div className="note-line" />
                  </div>
                )}
              </div>
            </section>

            <aside className="favorite-card" id="favorite">
              <div className="favorite-label">
                <Icon name="star" size={15} />
                <span>MY LITERARY MASTERPIECE</span>
              </div>
              <div className="favorite-content">
                <span className="eyebrow">THE ONE THAT STAYED WITH ME</span>
                <div className="favorite-stage">
                  <div className="favorite-circle" />
                  <BookCover book={favoriteBook} />
                  <span className="favorite-seal">
                    <Icon name="heart" size={17} />
                  </span>
                </div>
                <h2>
                  Sonnet
                  <br />
                  <em>CCXCII</em>
                </h2>
                <p className="favorite-author">
                  {favoriteBook.author} <span>·</span> {favoriteBook.year}
                </p>
                <div className="favorite-rule" />
                <p className="favorite-description">
                  A tender meditation on love, memory, and the absence that words cannot undo.
                </p>
                <div className="favorite-theme">
                  <span>WHY THIS WORK</span>
                  <p>Its honest grief. Its enduring love. The beauty of remembering.</p>
                </div>
                <button className="navy-button" onClick={() => setSelectedBook(favoriteBook)}>
                  Discover my perspective <Icon name="arrow" size={16} />
                </button>
                <span className="favorite-footnote">A POEM THAT GOES BEYOND THE PAGE</span>
              </div>
            </aside>
          </div>

          <section className="learning-section" id="learning">
            <div className="learning-heading">
              <span className="eyebrow">MORE THAN A READING LIST</span>
              <h2 className="section-title">What the pages taught me.</h2>
              <p>The readings ended. The learning didn’t.</p>
            </div>
            <div className="learning-grid">
              {learnings.map((learning, index) => (
                <button
                  key={learning.title}
                  className={`learning-item ${learningOpen === index ? "is-expanded" : ""}`}
                  aria-expanded={learningOpen === index}
                  aria-controls={`learning-detail-${index}`}
                  onClick={() => setLearningOpen(learningOpen === index ? null : index)}
                >
                  <span className="learning-icon">
                    <Icon name={learning.icon} size={27} />
                  </span>
                  <span className="learning-item-copy">
                    <strong>{learning.title}</strong>
                    <span>{learning.short}</span>
                  </span>
                  <Icon name="diagonal" size={16} />
                </button>
              ))}
            </div>
            {learningOpen !== null && (
              <div className="learning-detail" id={`learning-detail-${learningOpen}`}>
                <span className="eyebrow">A CLOSER LOOK · 0{learningOpen + 1}</span>
                <h3>{learnings[learningOpen].title}</h3>
                <p>{learnings[learningOpen].detail}</p>
                <button onClick={() => setLearningOpen(null)} aria-label="Close learning detail">
                  <Icon name="close" size={18} />
                </button>
              </div>
            )}
          </section>

          <section className="reflection-section" id="reflection">
            <div className="reflection-header">
              <div>
                <span className="eyebrow">LOOKING BACK, MOVING FORWARD</span>
                <h2>
                  Not just a reader.
                  <br />
                  <em>A different person.</em>
                </h2>
              </div>
              <p>
                Every work left a little of itself with me.
                <br />
                Here’s what I’m carrying into the next chapter.
              </p>
              <Icon name="book" size={65} />
            </div>
            <div className="reflection-grid">
              {reflections.map((reflection, index) => (
                <button
                  className={`reflection-item ${reflectionOpen === index ? "is-expanded" : ""}`}
                  key={reflection.number}
                  onClick={() => setReflectionOpen(reflectionOpen === index ? null : index)}
                  aria-expanded={reflectionOpen === index}
                >
                  <span className="reflection-number">
                    {reflection.number}
                    <Icon name={reflectionOpen === index ? "down" : "diagonal"} size={16} />
                  </span>
                  <h3>{reflection.title}</h3>
                  <p>{reflectionOpen === index ? reflection.text : reflection.preview}</p>
                  <span className="reflection-read">
                    {reflectionOpen === index ? "Close reflection" : "Read reflection"}
                  </span>
                </button>
              ))}
            </div>
            <div className="reflection-bottom">
              <span>THE JOURNEY CONTINUES</span>
              <div />
              <Icon name="sprout" size={18} />
            </div>
          </section>
        </div>
      </main>
      <footer className="site-footer">
        <a href="#home" className="footer-brand">
          <Icon name="book" size={21} /> My Literary Journey<span>.</span>
        </a>
        <p>Thoughtfully read. Personally reflected. Always learning.</p>
        <span>© 2026 JOHN RAY M. AMARO</span>
      </footer>
      {selectedBook && (
        <AnalysisModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onBookChange={setSelectedBook}
        />
      )}
    </>
  );
}

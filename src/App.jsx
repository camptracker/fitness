import { useState, useMemo } from 'react';
import { STATS, MACROS, QUOTES, MEALS, WORKOUTS, STRETCHING, MILESTONES, TIPS } from './data';
import './App.css';

const TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'workouts', label: 'Workouts', icon: '🏋️' },
  { id: 'meals', label: 'Meals', icon: '🥗' },
  { id: 'stretching', label: 'Stretch', icon: '🧘' },
  { id: 'plan', label: 'Plan', icon: '📋' },
];

function ProgressRing({ pct, size = 120, stroke = 8 }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} className="progress-ring">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="url(#grad)" strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1s ease' }} />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--coral)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MacroBar({ label, grams, pct, color }) {
  return (
    <div className="macro-bar">
      <div className="macro-bar-header">
        <span className="macro-label">{label}</span>
        <span className="macro-grams">{grams}g</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="macro-pct">{pct}%</span>
    </div>
  );
}

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <div className="meal-header">
        <span className="meal-name">{meal.name}</span>
        <span className="meal-cal">{meal.cal} cal</span>
      </div>
      <p className="meal-desc">{meal.desc}</p>
      <div className="meal-macros">
        <span className="mp">P {meal.p}g</span>
        <span className="mc">C {meal.c}g</span>
        <span className="mf">F {meal.f}g</span>
      </div>
    </div>
  );
}

// ─── TABS ───

function Dashboard() {
  const lostSoFar = 0; // static starting point
  const totalToLose = STATS.currentWeight - STATS.goalWeight;
  const pct = Math.round((lostSoFar / totalToLose) * 100);
  const quoteIdx = new Date().getDate() % QUOTES.length;

  return (
    <div className="tab-content">
      <h1 className="page-title">Your Journey ✨</h1>

      <Card className="quote-card">
        <p className="quote">"{QUOTES[quoteIdx]}"</p>
      </Card>

      <Card className="progress-card">
        <div className="progress-visual">
          <div className="ring-container">
            <ProgressRing pct={pct || 2} size={140} stroke={10} />
            <div className="ring-text">
              <span className="ring-big">{STATS.currentWeight}</span>
              <span className="ring-unit">lbs</span>
            </div>
          </div>
          <div className="progress-info">
            <div className="pi-row"><span className="pi-label">Current</span><span className="pi-val">{STATS.currentWeight} lbs</span></div>
            <div className="pi-row"><span className="pi-label">Goal</span><span className="pi-val accent">{STATS.goalWeight} lbs</span></div>
            <div className="pi-row"><span className="pi-label">To lose</span><span className="pi-val">{totalToLose} lbs</span></div>
            <div className="pi-row"><span className="pi-label">Timeline</span><span className="pi-val">~{STATS.weeksToGoal} weeks</span></div>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="card-title">📊 Daily Targets</h2>
        <div className="daily-targets">
          <div className="target-pill"><span className="tp-num">{STATS.dailyCal}</span><span className="tp-label">calories</span></div>
          <div className="target-pill"><span className="tp-num">{MACROS.protein.grams}g</span><span className="tp-label">protein</span></div>
          <div className="target-pill"><span className="tp-num">{MACROS.carbs.grams}g</span><span className="tp-label">carbs</span></div>
          <div className="target-pill"><span className="tp-num">{MACROS.fat.grams}g</span><span className="tp-label">fat</span></div>
        </div>
      </Card>

      <Card>
        <h2 className="card-title">📅 Today's Plan</h2>
        <div className="today-plan">
          <div className="plan-item"><span className="plan-icon">☀️</span><span>Morning mobility flow (10 min)</span></div>
          <div className="plan-item"><span className="plan-icon">🏋️</span><span>Strength training (see Workouts)</span></div>
          <div className="plan-item"><span className="plan-icon">🥗</span><span>Hit {STATS.dailyCal} cal &amp; {MACROS.protein.grams}g protein</span></div>
          <div className="plan-item"><span className="plan-icon">💧</span><span>Drink 8+ glasses of water</span></div>
          <div className="plan-item"><span className="plan-icon">😴</span><span>7-9 hours of quality sleep</span></div>
        </div>
      </Card>
    </div>
  );
}

function WorkoutsTab() {
  const [openDay, setOpenDay] = useState(0);
  return (
    <div className="tab-content">
      <h1 className="page-title">Workout Plan 🏋️</h1>
      <p className="page-sub">3-4x per week · Strength focused · Progressive overload</p>

      {WORKOUTS.map((w, i) => (
        <Card key={i} className={`workout-card ${openDay === i ? 'open' : ''}`}>
          <div className="workout-header" onClick={() => setOpenDay(openDay === i ? -1 : i)}>
            <div>
              <span className="workout-day">{w.day}</span>
              <span className="workout-focus">{w.focus}</span>
            </div>
            <span className="chevron">{openDay === i ? '▲' : '▼'}</span>
          </div>
          {openDay === i && (
            <div className="workout-body">
              <table className="exercise-table">
                <thead><tr><th>Exercise</th><th>Sets</th><th>Reps</th><th>Rest</th></tr></thead>
                <tbody>
                  {w.exercises.map((e, j) => (
                    <tr key={j}><td>{e.name}</td><td>{e.sets}</td><td>{e.reps}</td><td>{e.rest}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      ))}

      <Card className="tip-card">
        <h3>💡 Progressive Overload</h3>
        <p>Each week, aim to increase weight by 2.5-5 lbs OR add 1-2 reps. Track your lifts! When you can complete all reps with good form, it's time to go heavier.</p>
      </Card>
    </div>
  );
}

function MealsTab() {
  const cats = [
    { key: 'breakfast', label: '🌅 Breakfast', items: MEALS.breakfast },
    { key: 'lunch', label: '☀️ Lunch', items: MEALS.lunch },
    { key: 'dinner', label: '🌙 Dinner', items: MEALS.dinner },
    { key: 'snacks', label: '🍎 Snacks', items: MEALS.snacks },
  ];
  return (
    <div className="tab-content">
      <h1 className="page-title">Meal Ideas 🥗</h1>
      <p className="page-sub">Target: {STATS.dailyCal} cal/day · {MACROS.protein.grams}g protein</p>

      <Card className="macro-card">
        <h2 className="card-title">Macro Breakdown</h2>
        <MacroBar label="Protein" grams={MACROS.protein.grams} pct={MACROS.protein.pct} color="var(--accent)" />
        <MacroBar label="Carbs" grams={MACROS.carbs.grams} pct={MACROS.carbs.pct} color="var(--coral)" />
        <MacroBar label="Fat" grams={MACROS.fat.grams} pct={MACROS.fat.pct} color="var(--yellow)" />
      </Card>

      {cats.map(c => (
        <div key={c.key} className="meal-section">
          <h2 className="section-title">{c.label}</h2>
          <div className="meal-grid">
            {c.items.map((m, i) => <MealCard key={i} meal={m} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function StretchingTab() {
  const sections = [STRETCHING.morning, STRETCHING.warmup, STRETCHING.postWorkout];
  return (
    <div className="tab-content">
      <h1 className="page-title">Stretching & Mobility 🧘</h1>
      {sections.map((s, i) => (
        <Card key={i}>
          <h2 className="card-title">{s.title}</h2>
          <p className="stretch-dur">⏱ {s.duration}</p>
          <div className="stretch-list">
            {s.moves.map((m, j) => (
              <div className="stretch-item" key={j}>
                <div className="stretch-name">{m.name}</div>
                <div className="stretch-meta">
                  <span className="stretch-hold">{m.hold}</span>
                  <span className="stretch-note">{m.note}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function PlanTab() {
  const totalToLose = STATS.currentWeight - STATS.goalWeight;
  return (
    <div className="tab-content">
      <h1 className="page-title">Your Plan 📋</h1>

      <Card>
        <h2 className="card-title">⚡ Weight Loss Strategy</h2>
        <div className="plan-stats">
          <div className="ps-item"><span className="ps-num">{STATS.tdee}</span><span className="ps-label">TDEE (cal)</span></div>
          <div className="ps-item"><span className="ps-num">-{STATS.deficit}</span><span className="ps-label">Deficit</span></div>
          <div className="ps-item"><span className="ps-num">{STATS.dailyCal}</span><span className="ps-label">Daily Target</span></div>
          <div className="ps-item"><span className="ps-num">{STATS.weeklyLoss}</span><span className="ps-label">lbs/week</span></div>
        </div>
        <p className="plan-note">Based on: {STATS.age}F, {STATS.height}, {STATS.currentWeight} lbs, training 3-4x/week. A moderate 350 cal deficit preserves muscle while burning fat.</p>
      </Card>

      <Card>
        <h2 className="card-title">🗓 Timeline to {STATS.goalWeight} lbs</h2>
        <p className="plan-note">Estimated ~{STATS.weeksToGoal} weeks → <strong>{STATS.targetDate}</strong></p>
        <p className="plan-note">Losing {totalToLose} lbs at ~{STATS.weeklyLoss} lb/week is a healthy, sustainable pace. You'll keep your muscle and energy!</p>
      </Card>

      <Card>
        <h2 className="card-title">🏆 Milestones</h2>
        <div className="milestones">
          {MILESTONES.map((m, i) => (
            <div className="milestone" key={i}>
              <span className="ms-weight">{m.weight} lbs</span>
              <span className="ms-text">{m.label}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="card-title">💡 Tips for Consistency</h2>
        <div className="tips-list">
          {TIPS.map((t, i) => <div className="tip-item" key={i}><span className="tip-num">{i + 1}</span><span>{t}</span></div>)}
        </div>
      </Card>

      <Card>
        <h2 className="card-title">🌟 Motivation</h2>
        <div className="motivation-quotes">
          {QUOTES.slice(0, 8).map((q, i) => (
            <p className="mini-quote" key={i}>"{q}"</p>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('dashboard');

  const content = useMemo(() => {
    switch (tab) {
      case 'dashboard': return <Dashboard />;
      case 'workouts': return <WorkoutsTab />;
      case 'meals': return <MealsTab />;
      case 'stretching': return <StretchingTab />;
      case 'plan': return <PlanTab />;
      default: return <Dashboard />;
    }
  }, [tab]);

  return (
    <div className="app">
      <main className="main">{content}</main>
      <nav className="bottom-nav">
        {TABS.map(t => (
          <button key={t.id} className={`nav-btn ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
            <span className="nav-icon">{t.icon}</span>
            <span className="nav-label">{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

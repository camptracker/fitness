// ─── TDEE & Macro Calculations ───
// 31F, 5'4" (163cm), 126lbs (57.2kg), sedentary
// BMR (Mifflin-St Jeor): 10*57.2 + 6.25*163 - 5*31 - 161 = 572 + 1018.75 - 155 - 161 = 1274.75
// TDEE sedentary (x1.2) = 1530, light activity (x1.375) = 1753
// With 3-4x/week training, use activity factor ~1.5 → TDEE ≈ 1912
// Deficit of 350 cal → Target: ~1560 cal/day → ~0.7 lb/week → ~15.7 weeks

export const STATS = {
  currentWeight: 126,
  goalWeight: 115,
  height: "5'4\"",
  age: 31,
  tdee: 1910,
  deficit: 350,
  dailyCal: 1560,
  weeklyLoss: 0.7,
  weeksToGoal: 16,
  targetDate: 'Early June 2026',
};

export const MACROS = {
  protein: { grams: 126, cals: 504, pct: 32 },
  carbs: { grams: 145, cals: 580, pct: 37 },
  fat: { grams: 53, cals: 477, pct: 31 },
};

export const QUOTES = [
  "The only bad workout is the one that didn't happen.",
  "You don't have to be extreme, just consistent.",
  "Strong is the new beautiful. 💪",
  "Your body can stand almost anything. It's your mind you have to convince.",
  "Fall in love with taking care of yourself.",
  "Progress, not perfection.",
  "She believed she could, so she did.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Discipline is choosing between what you want now and what you want most.",
  "A one-hour workout is 4% of your day. No excuses.",
  "You're not starting over. You're starting from experience.",
  "Be stronger than your excuses.",
  "Sore today, strong tomorrow.",
  "The best project you'll ever work on is you.",
  "Small daily improvements lead to staggering long-term results.",
  "Your only limit is you.",
  "Don't wish for it. Work for it.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "Take care of your body. It's the only place you have to live.",
  "The secret of getting ahead is getting started.",
  "Believe in yourself and all that you are.",
  "Strive for progress, not perfection.",
  "Wake up with determination, go to bed with satisfaction.",
  "You are so much stronger than you think.",
];

// Unsplash images (free, high quality)
const img = (id, w=400) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${Math.round(w*0.65)}&fit=crop&auto=format&q=80`;

export const MEALS = {
  breakfast: [
    { name: "Greek Yogurt Parfait", cal: 320, p: 28, c: 35, f: 8, desc: "Greek yogurt, berries, granola, honey drizzle", image: img("1488477181946-6428a0291777") },
    { name: "Veggie Egg Scramble", cal: 290, p: 22, c: 12, f: 18, desc: "3 eggs, spinach, tomatoes, feta cheese on toast", image: img("1525351484163-7529414344d8") },
    { name: "Protein Smoothie Bowl", cal: 350, p: 30, c: 40, f: 10, desc: "Protein powder, frozen açai, banana, almond butter, chia seeds", image: img("1590301157890-4810ed352733") },
    { name: "Overnight Oats", cal: 310, p: 20, c: 42, f: 9, desc: "Oats, protein powder, almond milk, PB, strawberries", image: img("1490371475955-4cb3bfc72f71") },
  ],
  lunch: [
    { name: "Asian Chicken Lettuce Wraps", cal: 380, p: 35, c: 18, f: 20, desc: "Ground chicken, water chestnuts, hoisin, butter lettuce cups", image: img("1529692236671-f1f6cf9683ba") },
    { name: "Mediterranean Bowl", cal: 420, p: 30, c: 38, f: 16, desc: "Grilled chicken, quinoa, cucumber, tomato, hummus, olives", image: img("1512621776951-a57141f2eefd") },
    { name: "Salmon Poke Bowl", cal: 440, p: 32, c: 42, f: 14, desc: "Sushi rice, raw salmon, edamame, avocado, soy-sesame dressing", image: img("1546069901-ba9599a7e63c") },
    { name: "Turkey & Avocado Wrap", cal: 390, p: 28, c: 30, f: 18, desc: "Whole wheat wrap, turkey, avocado, arugula, tomato, mustard", image: img("1626700051175-6818013e1d4f") },
  ],
  dinner: [
    { name: "Lemon Herb Salmon", cal: 420, p: 38, c: 22, f: 20, desc: "Baked salmon, roasted sweet potato, steamed broccoli", image: img("1467003909585-2f8a72700288") },
    { name: "Korean Beef Bowl", cal: 450, p: 32, c: 40, f: 18, desc: "Lean ground beef, gochujang glaze, rice, pickled veggies, sesame", image: img("1553163147-622ab57be1c7") },
    { name: "Chicken Stir Fry", cal: 400, p: 35, c: 30, f: 15, desc: "Chicken breast, bell peppers, snap peas, garlic-ginger sauce, brown rice", image: img("1603133872878-684f208fb84b") },
    { name: "Turkey Taco Bowl", cal: 410, p: 34, c: 32, f: 16, desc: "Ground turkey, black beans, corn, salsa, cheese, Greek yogurt", image: img("1551504734-5ee1c4a1479b") },
    { name: "Shrimp Pasta", cal: 430, p: 30, c: 44, f: 14, desc: "Whole wheat penne, shrimp, cherry tomatoes, garlic, olive oil, basil", image: img("1563379926898-05f4575a45d8") },
  ],
  snacks: [
    { name: "Apple + Almond Butter", cal: 200, p: 5, c: 22, f: 12, desc: "Sliced apple with 1.5 tbsp almond butter", image: img("1568702846914-96b305d2aaeb") },
    { name: "Protein Bar", cal: 210, p: 20, c: 22, f: 8, desc: "Low-sugar protein bar (RX Bar, Built Bar, etc.)", image: img("1622484212850-eb596d769edc") },
    { name: "Cottage Cheese & Berries", cal: 160, p: 18, c: 14, f: 3, desc: "½ cup cottage cheese with mixed berries", image: img("1559561853-08451507cbe7") },
    { name: "Trail Mix", cal: 180, p: 6, c: 16, f: 12, desc: "Almonds, dark chocolate chips, dried cranberries (¼ cup)", image: img("1604068549290-dea0e4a305ca") },
  ],
};

// Helper: YouTube search URL for any exercise
const yt = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q + ' form demo')}`;
// Specific video links for popular exercises
const ytv = (id) => `https://www.youtube.com/watch?v=${id}`;

export const WORKOUTS = [
  {
    day: "Monday",
    focus: "Lower Body Strength 🦵",
    exercises: [
      { name: "Goblet Squat", sets: 4, reps: "10-12", rest: "90s", video: ytv("MeIiIdhvXT4") },
      { name: "DB Romanian Deadlift", sets: 4, reps: "10-12", rest: "90s", video: ytv("FQKfobOuSak") },
      { name: "DB Hip Thrust on Bench", sets: 4, reps: "12-15", rest: "60s", video: ytv("SEdqd1n0cvg") },
      { name: "Bulgarian Split Squat (DB)", sets: 3, reps: "10 each", rest: "60s", video: ytv("2C-uNgKwPLE") },
      { name: "DB Lunges", sets: 3, reps: "10 each", rest: "60s", video: ytv("D7KaRcUTQeE") },
      { name: "Glute Bridge", sets: 3, reps: "15-20", rest: "30s", video: ytv("OUgsJ8-Vi0E") },
      { name: "Calf Raises (DB)", sets: 3, reps: "15-20", rest: "30s", video: ytv("gwLzBJYoWlI") },
    ],
  },
  {
    day: "Wednesday",
    focus: "Upper Body Strength 💪",
    exercises: [
      { name: "DB Bench Press", sets: 4, reps: "8-10", rest: "90s", video: ytv("VmB1G1K7v94") },
      { name: "DB Row (single arm)", sets: 4, reps: "10 each", rest: "90s", video: ytv("roCP6wCXPqo") },
      { name: "DB Overhead Press", sets: 3, reps: "10-12", rest: "60s", video: ytv("qEwKCR5JCog") },
      { name: "Push-Ups", sets: 3, reps: "12-15", rest: "60s", video: ytv("IODxDxX7oi4") },
      { name: "DB Lateral Raises", sets: 3, reps: "12-15", rest: "45s", video: ytv("3VcKaXpzqRo") },
      { name: "DB Bicep Curls", sets: 3, reps: "12 each", rest: "45s", video: ytv("ykJmrZ5v0Oo") },
      { name: "DB Tricep Extensions (overhead)", sets: 3, reps: "12", rest: "45s", video: ytv("YbX7Wd8jQ-Q") },
    ],
  },
  {
    day: "Friday",
    focus: "Full Body Power 🔥",
    exercises: [
      { name: "DB Thrusters", sets: 4, reps: "10-12", rest: "90s", video: ytv("Iq8W7MHdKEY") },
      { name: "Renegade Rows", sets: 3, reps: "8 each", rest: "60s", video: ytv("-domAMhRnfA") },
      { name: "DB Clean & Press", sets: 3, reps: "10", rest: "90s", video: ytv("TIiVqXrOmn4") },
      { name: "DB Flyes on Bench", sets: 3, reps: "12", rest: "60s", video: ytv("eozdVDA78K0") },
      { name: "Burpees", sets: 3, reps: "10", rest: "60s", video: ytv("dZgVxmf6jkA") },
      { name: "Mountain Climbers", sets: 3, reps: "20 each", rest: "45s", video: ytv("nmwgirgXLYM") },
      { name: "Plank Hold", sets: 3, reps: "45-60s", rest: "30s", video: ytv("ASdvN_XEl_c") },
    ],
  },
  {
    day: "Saturday (Optional)",
    focus: "Active Recovery & Core 🏃‍♀️",
    exercises: [
      { name: "30-min walk, jog, or cycling", sets: 1, reps: "30 min", rest: "—", video: yt("walking cardio") },
      { name: "Dead Bugs", sets: 3, reps: "10 each", rest: "30s", video: ytv("I5xbsA71kIo") },
      { name: "Bicycle Crunches", sets: 3, reps: "15 each", rest: "30s", video: ytv("9FGilxCbdz8") },
      { name: "Leg Raises", sets: 3, reps: "12-15", rest: "30s", video: ytv("JB2oyawG9KI") },
      { name: "Bird Dogs", sets: 3, reps: "10 each", rest: "30s", video: ytv("wiFNA3sqjCA") },
      { name: "Foam Rolling", sets: 1, reps: "10 min", rest: "—", video: ytv("t7Gv3jKMKaM") },
    ],
  },
];

export const STRETCHING = {
  morning: {
    title: "Morning Mobility Flow ☀️",
    duration: "10-15 min",
    moves: [
      { name: "Cat-Cow", hold: "10 reps", note: "Warm up the spine", video: ytv("kqnua4rHVVA") },
      { name: "World's Greatest Stretch", hold: "30s each side", note: "Hip flexors + thoracic rotation", video: ytv("-CiWQ2IvY34") },
      { name: "90/90 Hip Stretch", hold: "45s each side", note: "Internal & external hip rotation", video: ytv("8p6FtlqpAYg") },
      { name: "Thread the Needle", hold: "30s each side", note: "Thoracic spine mobility", video: ytv("3V7i8H42o7o") },
      { name: "Standing Hamstring Stretch", hold: "30s each leg", note: "Gentle forward fold", video: ytv("2s2t3mEYZNo") },
      { name: "Shoulder Pass-Throughs", hold: "10 reps", note: "Use band or towel", video: ytv("1MYEouLye1A") },
      { name: "Neck Circles", hold: "30s each direction", note: "Slow, controlled", video: ytv("2M80Mn0VBPw") },
    ],
  },
  warmup: {
    title: "Pre-Workout Warm-Up 🔥",
    duration: "5-8 min",
    moves: [
      { name: "Jumping Jacks", hold: "30s", note: "Elevate heart rate", video: ytv("c4DAnQ6DtF8") },
      { name: "Leg Swings (front/back)", hold: "10 each leg", note: "Dynamic hip opener", video: ytv("0XvKtEZ4i38") },
      { name: "Leg Swings (lateral)", hold: "10 each leg", note: "Adductor warm-up", video: ytv("4aoUZEZFJF8") },
      { name: "Arm Circles", hold: "10 each direction", note: "Shoulder warm-up", video: ytv("21OERZzb7m8") },
      { name: "Bodyweight Squats", hold: "10 reps", note: "Activate glutes & quads", video: ytv("aclHkVaku9U") },
      { name: "Inchworms", hold: "5 reps", note: "Full body activation", video: ytv("0HFXsIMKqUg") },
      { name: "Hip Circles", hold: "10 each direction", note: "Open up the hips", video: ytv("BMQXk159YQ0") },
    ],
  },
  postWorkout: {
    title: "Post-Workout Cool Down 🧊",
    duration: "8-10 min",
    moves: [
      { name: "Pigeon Pose", hold: "45s each side", note: "Deep glute/hip stretch", video: ytv("07NSMi_U0tA") },
      { name: "Seated Hamstring Stretch", hold: "30s each leg", note: "Straight leg, reach forward", video: ytv("2s2t3mEYZNo") },
      { name: "Quad Stretch (standing)", hold: "30s each leg", note: "Hold ankle, keep knees together", video: ytv("2oP-9q5uDwQ") },
      { name: "Chest Doorway Stretch", hold: "30s each arm", note: "Open chest & front delts", video: ytv("2aaEKbUjLKk") },
      { name: "Child's Pose", hold: "45s", note: "Low back release", video: ytv("2MJGg-dUKh0") },
      { name: "Supine Spinal Twist", hold: "30s each side", note: "Low back & hip release", video: ytv("23ZSnLVPROs") },
      { name: "Deep Breathing", hold: "1 min", note: "Box breath: 4-4-4-4", video: ytv("tEmt1Znux58") },
    ],
  },
};

export const MILESTONES = [
  { weight: 124, label: "🎉 First 2 lbs down! Your clothes start feeling a bit looser." },
  { weight: 122, label: "⚡ 4 lbs gone! Energy levels noticeably up. You're building momentum." },
  { weight: 120, label: "🔥 Halfway there! You're visibly leaner. People start noticing." },
  { weight: 118, label: "💪 8 lbs down! Strength gains are real. You feel powerful." },
  { weight: 116, label: "✨ Almost there! 10 lbs lost. You look and feel incredible." },
  { weight: 115, label: "🏆 GOAL REACHED! 115 lbs. You did it. Time to maintain & thrive!" },
];

export const TIPS = [
  "Track your food for at least the first 4 weeks — awareness is everything.",
  "Drink water first thing in the morning and before every meal.",
  "Sleep 7-9 hours. Recovery is when the magic happens.",
  "Take progress photos every 2 weeks — the scale doesn't show everything.",
  "Prep meals on Sunday to make weekdays effortless.",
  "Don't skip protein at breakfast — it keeps you full longer.",
  "One bad meal doesn't ruin a good week. Move on and keep going.",
  "Find a workout buddy or accountability partner.",
  "Celebrate non-scale victories: strength PRs, energy, mood, sleep quality.",
  "Rest days are not lazy days — they're recovery days. Your muscles grow during rest.",
];

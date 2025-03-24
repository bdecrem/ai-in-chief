export interface CEOCharacter {
  id: string;
  name: string;
  nickname: string;
  leadershipStyle: string;
  quirks: string[];
  ethnicity: string;
  age: string;
  visualGuidance: string[];
  accentColor: string;
  imagePath: string;
}

export const CEO_CHARACTERS: CEOCharacter[] = [
  {
    id: 'harper',
    name: 'Harper',
    nickname: 'Hurricane',
    leadershipStyle: 'Visionary disrupter. Sharp, energetic, high-speed thinker. Thrives in chaos and always ahead of the curve.',
    quirks: ['Talks fast', 'Scribbles constantly on whiteboards', 'Wears blazers askew without noticing'],
    ethnicity: 'White woman',
    age: 'mid-30s',
    visualGuidance: [
      'Slightly askew blazer',
      'Wild curly hair with subtle purple highlights',
      'Intense eyes looking at the viewer, confident half-smile',
      'Office background with chaotic whiteboard covered in genius-level scribbles'
    ],
    accentColor: 'primary-harper',
    imagePath: '/characters/harper.webp'
  },
  {
    id: 'misha',
    name: 'Misha',
    nickname: 'Midnight',
    leadershipStyle: 'Introspective innovator. Quietly brilliant. Thinks deeply, rarely speaks unless it\'s profound.',
    quirks: ['Loves working at night', 'Wears the same turtleneck daily', 'Often stares into space mid-meeting'],
    ethnicity: 'Black non-binary person',
    age: 'late 20s',
    visualGuidance: [
      'Undercut hairstyle, silver ear cuff',
      'Dark turtleneck, dreamy faraway gaze',
      'Dramatic side-lighting, nighttime city background (blurred bokeh)'
    ],
    accentColor: 'primary-misha',
    imagePath: '/characters/misha.webp'
  },
  {
    id: 'frankie',
    name: 'Frankie',
    nickname: 'Flip-Flop',
    leadershipStyle: 'Reluctant genius. Flip-flops between overconfidence and impostor syndrome. Brilliant but indecisive.',
    quirks: ['Changes ideas mid-sentence', 'Wears mismatched outfits', 'Keeps thousands of Post-its'],
    ethnicity: 'Latino man',
    age: 'early 50s',
    visualGuidance: [
      'Hair salt-and-pepper, a bit messy',
      'Split outfit: One half formal (tie), other half casual (open collar)',
      'One side confident expression, other side uncertain',
      'Glasses slipping off nose; Post-its in background'
    ],
    accentColor: 'primary-frankie',
    imagePath: '/characters/frankie.webp'
  },
  {
    id: 'riley',
    name: 'Riley',
    nickname: 'Robot',
    leadershipStyle: 'Calculated perfectionist. Hyper-logical and precise. Builds systems, not teams.',
    quirks: ['Color-codes everything', 'Corrects grammar in Slack', 'Always 5 minutes early'],
    ethnicity: 'White woman',
    age: 'mid-40s',
    visualGuidance: [
      'Geometric bob with silver streak',
      'Perfectly tailored monochrome attire',
      'Smart glasses with projected data',
      'Stark white background with light grid pattern',
      'Expression: calm, focused'
    ],
    accentColor: 'primary-riley',
    imagePath: '/characters/riley.webp'
  },
  {
    id: 'bailey',
    name: 'Bailey',
    nickname: 'Barefoot',
    leadershipStyle: 'Grounded strategist. Calm, centered, and quietly influential. Thinks long-term and sees patterns others don\'t.',
    quirks: ['Goes barefoot in the office', 'Wears beads and a Rolex', 'Gives business advice during yoga'],
    ethnicity: 'East Asian woman',
    age: 'late 60s',
    visualGuidance: [
      'Long silver braid, serene but sharp expression',
      'Flowy linen blazer over yoga top',
      'Meditation beads and luxury watch side-by-side',
      'Background: Zen garden in foreground, financial district skyline in distance'
    ],
    accentColor: 'primary-bailey',
    imagePath: '/characters/bailey.webp'
  },
  {
    id: 'charlie',
    name: 'Charlie',
    nickname: 'Chaotic',
    leadershipStyle: 'Passionate builder. Thinks through doing. Moves fast, breaks everything, then builds again, sometimes better.',
    quirks: ['Constantly pacing', 'Talks with hands', 'Surrounds self with coffee cups and prototype gadgets'],
    ethnicity: 'South Asian man',
    age: 'early 30s',
    visualGuidance: [
      'Messy curly hair, short beard',
      'Rolled-up sleeves, expensive shirt rumpled',
      'In motion, animated expression',
      'Background: Monitors with dozens of open tabs, papers, wires, coffee'
    ],
    accentColor: 'primary-charlie',
    imagePath: '/characters/charlie.webp'
  }
]; 
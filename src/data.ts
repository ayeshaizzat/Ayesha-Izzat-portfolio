// Edit your content here: every section reads from this file.
export const profile = {
  name: 'Ayesha',
  role: 'Python & FastAPI Developer',
  tagline: 'I build FastAPI backends and AI-assisted apps.',
  intro:
    'Software engineering student at UBIT, University of Karachi. I pair clean Python APIs with thoughtful interfaces, and I am open to internships and freelance projects.',
  email: 'ayeshaizzatali@gmail.com', // TODO: replace with your real email
}

export type Project = { title: string; status: string; blurb: string; stack: string[]; link?: string }

export const projects: Project[] = [
  {
    title: 'AI Expense Tracker',
    status: 'In development',
    blurb:
      ' An AI-powered expense tracker that categorizes spending automatically and turns your transactions into clear, actionable insights. ',
    stack: ['Python', 'FastAPI', 'React' , 'Vercel'],
  },
  {
    title: 'NeuralCanvas',
    status: 'Live',
    blurb:
      'A creative, AI-flavoured web experience with a focus on smooth interaction and a polished interface, deployed and shareable.',
    stack: ['React', 'TypeScript', 'Vercel'],
  },
  {
    title: 'University Carpooling App',
    status: 'In development',
    blurb:
      'A ride-sharing platform for students: a FastAPI backend with typed schemas, a React + TypeScript frontend, and AI-assisted ride matching planned next.',
    stack: ['FastAPI', 'Python', 'React', 'TypeScript'],
  },
]

export const skills: Record<string, string[]> = {
  Backend: ['Python', 'FastAPI', 'REST APIs', 'Pydantic', 'SQL'],
  'AI Features': ['Prompt engineering', 'LLM integration', 'Structured outputs'],
  Frontend: ['CSS', 'Tailwind CSS'],
  Design: ['UI/UX', 'Graphic design', 'Minimal layouts'],
}

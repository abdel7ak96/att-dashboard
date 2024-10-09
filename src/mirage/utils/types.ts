export type Session = {
  id: string;
  worker: string;
  recordedBy: string;
  startedAt: string;
  duration: string;
  completedAt: string;
};

export type User = {
  id: string;
  email: string;
  password: string;
};

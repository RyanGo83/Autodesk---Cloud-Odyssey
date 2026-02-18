export interface HistoricalReference {
  quote: string;
  label: string;
  url: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  oldName: string;
  newName: string;
  description: string;
  tip?: string;
  snark: string;
  color: string;
  status?: string;
  references?: HistoricalReference[];
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
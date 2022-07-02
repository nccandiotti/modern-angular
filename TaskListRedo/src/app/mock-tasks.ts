import { Task } from './Task';

// type needs to be Task[] and NOT just Task because it's an ARRAY of tasks not a single task
export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Hair Appointment',
    day: 'May 6th at 4:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Grocery Shopoping',
    day: 'May 7th at 11:00a m',
    reminder: false,
  },
];

export type TaskStatus = 'completed' | 'problem' | 'not_applicable';

export interface TaskRecord {
  taskId: string;
  categoria: string;
  tarea: string;
  status: TaskStatus;
  note?: string;
}

export interface ChecklistSubmission {
  id: string;
  hotelSlug: string;
  hotelName: string;
  employeeId: string;
  employeeNumber: string;
  employeeName: string;
  puestoId: string;
  puestoNombre: string;
  area: string;
  date: string; // YYYY-MM-DD
  submittedAt: string; // ISO string
  tasks: TaskRecord[];
  generalNotes?: string;
  totalTasks: number;
  completedTasks: number;
  problemTasks: number;
  notApplicableTasks: number;
  compliancePercentage: number;
}

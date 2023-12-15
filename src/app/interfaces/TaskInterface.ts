export interface Task {
  id: string;
  title: string;
  description?: string;
  isPending: boolean;
  filterType: "done" | "pending" | "all";
}

import { z } from "zod"
import { TaskPriority, TaskStatus } from "@/common/enums"

export type DomainTask = z.infer<typeof domainTaskSchema>

export const domainTaskSchema = z.object({
  description: z.string().nullable(),
  startDate: z.string().nullable(),
  deadline: z.string().nullable(),
  title: z.string(),
  status: z.nativeEnum(TaskStatus),
  priority: z.nativeEnum(TaskPriority),
  id: z.string(),
  todoListId: z.string(),
  order: z.number(),
  addedDate: z.string().datetime({ local: true }),
})

export type GetTasksResponse = {
  error: Nullable
  totalCount: number
  items: DomainTask[]
}

export type UpdateTaskModel = {
  description: Nullable
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: Nullable
  deadline: Nullable
}

export type Nullable<T = string> = T | null

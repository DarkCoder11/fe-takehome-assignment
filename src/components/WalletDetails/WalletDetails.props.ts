export type QuickTransferUser = {
  id: number
  name: string
  role: string
  avatar: string
}

export type QuickTransferProps = {
  users: QuickTransferUser[]
}

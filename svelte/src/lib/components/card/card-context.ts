export const CARD_CTX = Symbol("card-context")

export type CardContext = {
  setTitleId: (id: string) => void
}

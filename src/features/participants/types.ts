export interface IParticipant {
  id: number;
  name: string;
  bid: number;
  isActive: boolean;
}

export interface IParticipantsState {
  participants: IParticipant[];
}

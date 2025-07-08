import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    <Navigate replace to={"/"} />;
  }

  return (
    <div>
      <div>Room Details {JSON.stringify(params.roomId)}</div>
    </div>
  );
}

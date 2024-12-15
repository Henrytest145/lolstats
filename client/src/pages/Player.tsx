interface PlayerProps {
    data: number;
  }
  
  const Player = ({ data }: PlayerProps) => {
    return (
      <div>
        Player data: {data}
      </div>
    );
  };
  
  export default Player;
  
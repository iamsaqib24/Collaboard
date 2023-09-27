import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Board = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const canvasRef = useRef(null);

  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Board;

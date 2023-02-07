const { useLightBulb } = require("@/lib/hooks");

function LightBulb() {
  const [lightbulb, { on, off, stomp }] = useLightBulb();
  return (
    <div>
      {lightbulb}
      <button onClick={on}>on</button>
      <button onClick={off}>off</button>
      <button onClick={stomp}>stomp</button>
    </div>
  );
}

export default LightBulb;

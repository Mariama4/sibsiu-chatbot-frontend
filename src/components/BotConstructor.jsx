import { Container } from "react-bootstrap";
import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";

const BotConstructor = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
}) => {
  return (
    <Container
      className="border border-dark"
      style={{ width: "100vw", height: "100vh", padding: "50px" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </Container>
  );
};

export default BotConstructor;

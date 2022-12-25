import { useState } from "react";
import {
  FormControl,
  Button,
  FormGroup,
  Spinner,
  Image,
} from "react-bootstrap";
import { useCreateImageMutation } from "./services/api";

function App() {
  const [createImage, { data, isLoading, isError }] = useCreateImageMutation();
  const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    if (prompt === "" || !prompt) {
      alert("Please enter a text");
      return;
    }
    await createImage({
      prompt,
    });
    setPrompt("");
  };

  return (
    <div className="my-5">
      <h2 className="my-4">Open AI</h2>
      <FormGroup>
        <FormControl
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter text..."
        />
      </FormGroup>
      <FormGroup className="my-4">
        {isLoading ? (
          <Spinner animation="border" variant="success" />
        ) : (
          <Button onClick={handleClick} className="w-100" variant="success">
            Generate
          </Button>
        )}
      </FormGroup>
      {data && <Image width={150} height={150} src={data.image} />}
      {isError && (
        <p className="h5 text-danger">
          An error occured please try again later...
        </p>
      )}
    </div>
  );
}

export default App;

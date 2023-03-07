import { useEffect, useState } from "react"
import imageService from "./services/imageService";
import api from "./api";
import "./App.css";

function App() {

  const [file, setFile] = useState();
  const [imageKeys, setImagesKeys] = useState([])

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file)
  };

  const submit = async (event) => {
    event.preventDefault();

    const result = await imageService.postImage({ image: file });
    console.log(result.imagePath);

    const imageKey = result.imagePath.replace(/^\/image\//, "");

    setImagesKeys([imageKey, ...imageKeys])
  };


  useEffect(()=>{
       api.get("/image").then(({data})=>{
        setImagesKeys(data);
       })  
  }, [])


  return (
    <div className="container">
      <form
        onSubmit={submit}
        className="form"
      >
        <input
          onChange={fileSelected}
          type="file"
          name="uploadImg"
          accept="image/png, image/jpeg" />

        <button type="submit" className="submitButton">Submit</button>
      </form>
      {<div className="imageContainer">
        {imageKeys.map((key) => (
          <div key={key}>
            <img
              src={`http://localhost:8080/image/${key}`}
              alt="teste"
              className="image" />
          </div>
        ))}
      </div>}
    </div>
  );
}
export default App;
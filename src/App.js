import "./App.css";

function App() {

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
      {/* <div className="imageContainer"> 
         {imageKeys.map((key) => ( <div key={key}>
          <img src={`http://localhost:8080/images/${key}`} alt="teste" className="image" />
           </div> ))} </div> */}
    </div>
  );
}
export default App;
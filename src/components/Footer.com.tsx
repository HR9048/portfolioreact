import { Button } from "@mui/material"

export const Footer:React.FC<{}>=()=>{
    return<>
     <center>
     <footer className="footer">
      <div className="container">
        <h1>Get In Touch</h1>
          <p>I'm currently looking for full-time Software Engineering or Machine Learning opportunities!</p>
          <p>If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at <a href="mailto:harishraghoji9048@gmail.com"><Button>harishraghoji9048@gmail.com</Button></a></p>
          <p>with by <a href="https://github.com/hr9048"><Button>Harish Raghoji</Button></a></p>
      </div>
    </footer>
     </center>
    </>
}
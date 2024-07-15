import React from "react";
import about from "../../asests/about.jfif";

const About = () => {
  return (
    <div className="container">
      <div className="col-7 mx-auto mt-4 text-center ">
        <h2 className="h2">Model Specifications</h2>
        <p className="p pt-2">
          This brain tumor detection model is built on a state-of-the-art neural
          network architecture, leverging deep learning techniques to analyze
          complex patterns within medical images. Below are some Training
          Design.
        </p>
      </div>

      <div className="col-12 d-flex align-items-center justify-content-between mt-5">
        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">Extensively</span> <br /> Trained
        </div>

        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">99% </span>Accuracy
        </div>
        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">High </span>Precision
        </div>
        <div className="boxClr col-2 text-center px-5 py-4 rounded">
          <span className="clr">BraTS20</span> Dataset
        </div>
      </div>

      <div className="col-12 mt-5 d-flex align-items-center justify-content-end">
        <div className="col-6">
          <img className="rounded-top" src={about} alt="about" height={500} />
        </div>

        <div className="col-6">
          <div className="aboutText">
            <span>Comprehensive</span>
            <h4>About This Project</h4>
            <p>
              Leverging OpenCV and PIL for image processing, TensorFlow and
              Keras for machine learning, and NumPy with Pathlib for seamless
              data manipulation, this system ensure efficient handling of
              medical images and datasets. The core architecture, based on
              Convolutional Neural Networks (CNNs), capture intricate patterns
              in medical images. Optimized using the Adam optimizer and
              monitored via TensorBoard, our system delivers precise, timely and
              potentially life-saving results for medical professionals and
              patients.
            </p>
          </div>

          <div className="aboutText pt-3">
            <h4>Technical Staff </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
              quia voluptate libero facilis officia harum. Dolorem, adipisci
              illum voluptatum veritatis aliquam placeat nam necessitatibus?
              Labore error nulla sed non sint iure dicta itaque modi vitae
              cumque libero saepe magni, fuga reprehenderit, quasi aperiam! Ea,
              pariatur! Eius ut in ea aliquid ipsam totam, asperiores modi
              voluptatem animi. Recusandae aperiam quaerat saepe dolore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

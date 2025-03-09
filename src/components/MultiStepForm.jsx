import { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Success from "./Success";
import ProgressBar from "./ProgressBar";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ firstName: "", lastName:"", email:"", phoneNo:"", state:"", currentOccupation: "", course: "", year: "", profession:"", interestedCourse: "",});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const [submitAppeared, setSubmitAppeared] = useState(false);
  useEffect(()=>{
    setSubmitAppeared(step==6);
  },[step]);

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <Header isAppear = {submitAppeared} />
      <ProgressBar step={step} />
      <AnimatePresence mode="wait">
        <MotionDiv
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />}
          {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />}
          {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />}
          {step === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData}/> }
          {step === 5 && <Success/> }
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
};

export default MultiStepForm;

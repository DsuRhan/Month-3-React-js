import BasicForm from "./components/BasicIntegrationForm";
import MultiStepForm from "./components/MultiStepForm";
import DynamicProductForm from "./components/DynamicFormValidation";
import ProfileUploadForm from "./components/AdvancedIntegrationForm";

export default function App() { 
  return (
    <div className="App">
      <BasicForm />
      <MultiStepForm />
      <DynamicProductForm />
      <ProfileUploadForm />
    </div>
  );
}
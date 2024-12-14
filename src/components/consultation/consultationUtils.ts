type ConsultationData = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  organization?: string;
  industry?: string;
  linkedIn?: string;
  message: string;
};

export const sendConsultationEmail = async (data: ConsultationData) => {
  // In a real application, this would be an API call to your backend
  // For now, we'll just log the data
  console.log('Sending email to: agnes.mak.dipai24-2@said.oxford.edu');
  console.log('Subject: Potential Client of Oxford Five - Request from Web Form');
  console.log('Form data:', data);
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};
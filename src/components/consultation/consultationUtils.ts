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
  try {
    // In a real application, this would be an API call to your backend
    console.log('Sending consultation request to:', 'agnes.mak.dipai24-2@said.oxford.edu');
    console.log('Subject: Potential Client of Oxford Five - Request from Web Form');
    console.log('Form data:', {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // For now, we'll simulate the API call
    // In production, this should be replaced with a real API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Your consultation request has been sent successfully!'
    };
  } catch (error) {
    console.error('Error sending consultation request:', error);
    throw new Error('Failed to send consultation request. Please try again later.');
  }
};
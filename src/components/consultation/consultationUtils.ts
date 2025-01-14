import emailjs from '@emailjs/browser';

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

// Initialize EmailJS with your public key
emailjs.init("48BN2GLcVEnoorqfQ");

export const sendConsultationEmail = async (data: ConsultationData) => {
  try {
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      country: data.country,
      organization: data.organization || 'Not provided',
      industry: data.industry || 'Not provided',
      linkedin: data.linkedIn || 'Not provided',
      message: data.message,
    };

    const response = await emailjs.send(
      "service_9exa08e",
      "template_kxq5h4p",
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Your consultation request has been sent successfully!'
      };
    } else {
      throw new Error('Failed to send consultation request');
    }
  } catch (error) {
    console.error('Error sending consultation request:', error);
    throw new Error('Failed to send consultation request. Please try again later.');
  }
};
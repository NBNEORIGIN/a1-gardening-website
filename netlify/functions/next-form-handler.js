export async function handler(event, context) {
  const { name, email, phone, serviceType, message } = JSON.parse(event.body);

  // Here you would typically send an email or store the form data
  // For now, we'll just return a success response
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Form submitted successfully!',
      data: { name, email, phone, serviceType, message }
    })
  };
}

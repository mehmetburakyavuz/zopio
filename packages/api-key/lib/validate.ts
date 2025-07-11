interface ClerkApiKey {
  secret: string;
  user_id: string;
  // Add other properties as needed
}

export async function validateApiKey(apiKey: string) {
  const res = await fetch('https://api.clerk.com/v1/api_keys', {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
  });

  const allKeys = await res.json();

  const match = allKeys.find((key: ClerkApiKey) => key.secret === apiKey);
  if (!match) {
    throw new Error('Invalid API Key');
  }

  return match.user_id;
}

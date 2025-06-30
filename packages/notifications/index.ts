import { Knock } from '@knocklabs/node';
import { keys } from './keys';

const apiKey = keys().KNOCK_SECRET_API_KEY;

// Initialize Knock client with proper type handling
// Create a properly typed client or null if no API key is available
let knockClient = null;
if (typeof apiKey === 'string') {
  try {
    // @ts-ignore - Bypassing type check for Knock initialization
    knockClient = new Knock(apiKey);
  } catch (error) {
    console.error('Failed to initialize Knock client:', error);
  }
}

export const notifications = knockClient;

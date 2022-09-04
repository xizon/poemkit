// Authority 
import authHeader from '@/services/auth-header.js';

export default function isAdmin() {
	return !(JSON.stringify(authHeader()) === '{}');
}

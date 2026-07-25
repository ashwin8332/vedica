// Mock Authentication Service
export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}

// Default user credentials
const DEFAULT_USER = {
    id: '1',
    email: 'user@evbharat.com',
    password: 'Evbharat@123',
    name: 'Alex Sharma',
    role: 'owner'
};

class AuthService {
    private storageKey = 'evbharat_auth';
    private userKey = 'evbharat_user';

    /**
     * Get current authentication state
     */
    public getAuthState(): AuthState {
        const token = localStorage.getItem(this.storageKey);
        const userStr = localStorage.getItem(this.userKey);
        
        if (token && userStr) {
            try {
                const user = JSON.parse(userStr);
                return {
                    isAuthenticated: true,
                    user,
                    token
                };
            } catch (e) {
                return {
                    isAuthenticated: false,
                    user: null,
                    token: null
                };
            }
        }

        return {
            isAuthenticated: false,
            user: null,
            token: null
        };
    }

    /**
     * Check if user is authenticated
     */
    public isAuthenticated(): boolean {
        return this.getAuthState().isAuthenticated;
    }

    /**
     * Get current user
     */
    public getCurrentUser(): User | null {
        return this.getAuthState().user;
    }

    /**
     * Login user
     */
    public login(email: string, password: string): { success: boolean; message: string; user?: User } {
        // Check credentials against default user
        if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
            const user: User = {
                id: DEFAULT_USER.id,
                email: DEFAULT_USER.email,
                name: DEFAULT_USER.name,
                role: DEFAULT_USER.role
            };

            const token = this.generateToken();
            
            localStorage.setItem(this.storageKey, token);
            localStorage.setItem(this.userKey, JSON.stringify(user));

            return {
                success: true,
                message: 'Login successful',
                user
            };
        }

        return {
            success: false,
            message: 'Invalid email or password'
        };
    }

    /**
     * Register new user (for signup)
     */
    public signup(name: string, email: string, _password: string): { success: boolean; message: string; user?: User } {
        // In a real app, you'd validate and save to backend
        // For now, we'll create a new user locally
        const user: User = {
            id: String(Date.now()),
            email,
            name,
            role: 'owner'
        };

        const token = this.generateToken();
        
        localStorage.setItem(this.storageKey, token);
        localStorage.setItem(this.userKey, JSON.stringify(user));

        return {
            success: true,
            message: 'Account created successfully',
            user
        };
    }

    /**
     * Logout user
     */
    public logout(): void {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.userKey);
    }

    /**
     * Generate mock token
     */
    private generateToken(): string {
        return 'token_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }

    /**
     * Get default user credentials (for display in login form)
     */
    public getDefaultCredentials() {
        return {
            email: DEFAULT_USER.email,
            password: DEFAULT_USER.password,
            name: DEFAULT_USER.name
        };
    }
}

export const authService = new AuthService();

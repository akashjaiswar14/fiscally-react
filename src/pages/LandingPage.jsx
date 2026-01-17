import { Link } from "react-router-dom";
import { Wallet, TrendingUp, TrendingDown, Shield } from "lucide-react";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
        {/* Navbar */}
        <header className="flex justify-between items-center px-10 py-6 border-b">
            <div className="flex items-center gap-2 text-2xl font-bold text-purple-600">
            <Wallet size={28} />
            Fiscally
            </div>

            <div className="flex gap-4">
            <Link
                to="/login"
                className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50"
            >
                Login
            </Link>
            <Link
                to="/signup"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
                Get Started
            </Link>
            </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center px-6 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Take Control of Your <span className="text-purple-600">Finances</span>
            </h1>

            <p className="max-w-2xl text-lg text-gray-600 mb-8">
            Track income, manage expenses, analyze trends, and stay financially
            disciplined — all in one simple dashboard.
            </p>

            <Link
            to="/signup"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700"
            >
            Start Tracking Now
            </Link>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-4 gap-8 px-10 pb-20">
            <FeatureCard
            icon={<TrendingUp size={32} className="text-green-600" />}
            title="Income Tracking"
            description="Track all income sources and monitor growth over time."
            />

            <FeatureCard
            icon={<TrendingDown size={32} className="text-red-600" />}
            title="Expense Management"
            description="Categorize and control your spending effortlessly."
            />

            <FeatureCard
            icon={<Wallet size={32} className="text-purple-600" />}
            title="Smart Dashboard"
            description="Get real-time insights into balance, income & expenses."
            />

            <FeatureCard
            icon={<Shield size={32} className="text-blue-600" />}
            title="Secure & Private"
            description="JWT-secured APIs with full data isolation per user."
            />
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 border-t">
            © {new Date().getFullYear()} Fiscally. All rights reserved.
        </footer>
        </div>
    );
    };

    const FeatureCard = ({ icon, title, description }) => (
    <div className="border rounded-xl p-6 text-center hover:shadow-md transition">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

export default LandingPage;

import { useState } from 'react';

// Function to generate HTML travel plan from form data
const generateTravelPlanHtml = (formData) => {
    const adultCount = parseInt(formData.adults) || 0;
    const childrenCount = parseInt(formData.children) || 0;
    const infantCount = parseInt(formData.infants) || 0;
    const totalTravelers = adultCount + childrenCount + infantCount;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Travel Plan Summary</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            max-width: 800px;
            width: 100%;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
            animation: slideIn 0.5s ease-out;
        }
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .header p {
            font-size: 1.1em;
            opacity: 0.9;
        }
        .content {
            padding: 40px;
        }
        .section {
            margin-bottom: 35px;
        }
        .section h2 {
            font-size: 1.5em;
            color: #667eea;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
        }
        .details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        .detail-item {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            transition: transform 0.3s ease;
        }
        .detail-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .detail-label {
            font-size: 0.9em;
            color: #6c757d;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        .detail-value {
            font-size: 1.3em;
            color: #212529;
            font-weight: 600;
        }
        .highlight {
            color: #667eea;
        }
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #6c757d;
            font-size: 1.1em;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✈️ Your Travel Itinerary</h1>
            <p>Everything you need for your perfect trip</p>
        </div>
        <div class="content">
            <div class="section">
                <h2>🌍 Journey Details</h2>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">From</div>
                        <div class="detail-value">${formData.origin}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">To</div>
                        <div class="detail-value highlight">${formData.destination}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Departure</div>
                        <div class="detail-value">${formData.departure}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Return</div>
                        <div class="detail-value">${formData.return}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Trip Type</div>
                        <div class="detail-value">${formData.tripType}</div>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2>👥 Travelers</h2>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">Total Travelers</div>
                        <div class="detail-value highlight">${totalTravelers} ${totalTravelers === 1 ? 'person' : 'people'}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Adults</div>
                        <div class="detail-value">${formData.adults}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Children</div>
                        <div class="detail-value">${formData.children}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Infants</div>
                        <div class="detail-value">${formData.infants}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Group Type</div>
                        <div class="detail-value">${formData.groupType}</div>
                    </div>
                </div>
            </div>
            <div class="section">
                <h2>💰 Budget & Preferences</h2>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">Budget</div>
                        <div class="detail-value highlight">${formData.currency} ${formData.amount}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Accommodation</div>
                        <div class="detail-value">${formData.accommodation.charAt(0).toUpperCase() + formData.accommodation.slice(1)}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Interests</div>
                        <div class="detail-value">${formData.interests || 'Exploring all options'}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            🎉 Have an amazing trip to ${formData.destination}!
        </div>
    </div>
</body>
</html>`;
};

const TravelPlanForm = ({ onClose, onSubmit }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // User Details (Step 1)
        fullName: '',
        email: '',
        mobile: '',

        // Trip Details (Step 2)
        origin: '',
        destination: '',
        departure: '',
        return: '',
        tripType: 'round-trip',

        // Travelers & Budget (Step 3)
        adults: '1',
        children: '0',
        infants: '0',
        groupType: 'family',
        amount: '',
        currency: 'USD',
        accommodation: 'any',
        interests: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [responseHtml, setResponseHtml] = useState(null);
    const [showProcessing, setShowProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => {
        if (currentStep === 1) {
            // Validate user details
            if (!formData.fullName || !formData.email || !formData.mobile) {
                alert('Please fill in all required contact information');
                return;
            }
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Please enter a valid email address');
                return;
            }
        } else if (currentStep === 2) {
            // Validate trip details
            if (!formData.origin || !formData.destination || !formData.departure || !formData.return) {
                alert('Please fill in all required trip details');
                return;
            }
        }
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setResponseHtml(null);
        setShowProcessing(false);

        try {
            // Send data to backend proxy which forwards to n8n webhook
            const response = await fetch('http://localhost:5001/api/travel-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('✅ Response received:', result);
                console.log('📄 HTML data:', result.data);
                setSubmitStatus('success');

                // Show processing message
                setShowProcessing(true);

                // Wait a moment then show the HTML response
                setTimeout(() => {
                    // Extract HTML from response (check if it's nested in data.text or data directly)
                    let htmlContent = null;

                    if (result.data) {
                        // Try to parse if it's a JSON string
                        try {
                            const parsed = JSON.parse(result.data);
                            htmlContent = parsed.text || result.data;
                        } catch {
                            htmlContent = result.data;
                        }
                    }

                    if (htmlContent && htmlContent.includes('<!DOCTYPE html>')) {
                        console.log('🎨 Setting HTML response');
                        setResponseHtml(htmlContent);
                        setShowProcessing(false);
                    } else {
                        // If n8n returns test message, generate HTML from form data
                        console.log('⚠️ Test response detected, generating HTML from form data');
                        const htmlResponse = generateTravelPlanHtml(formData);
                        setResponseHtml(htmlResponse);
                        setShowProcessing(false);
                    }
                }, 1500);

                // Call parent onSubmit if provided
                if (onSubmit) {
                    onSubmit(formData);
                }
            } else {
                console.error('❌ Response not OK:', response.status);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-8 animate-slide-up shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Show HTML Response if available */}
                {responseHtml ? (
                    <div className="w-full">
                        <div
                            dangerouslySetInnerHTML={{ __html: responseHtml }}
                        />
                        <div className="p-6 text-center">
                            <button
                                onClick={onClose}
                                className="py-3 px-8 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 border border-slate-600 hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ) : showProcessing ? (
                    <div className="w-full text-center py-12">
                        <div className="text-6xl mb-6 animate-bounce">🌍</div>
                        <h2 className="text-2xl font-bold mb-4">Creating Your Travel Plan...</h2>
                        <p className="text-gray-400 mb-6">Our AI is crafting the perfect itinerary for you</p>
                        <div className="flex justify-center gap-2">
                            <div className="w-3 h-3 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-3 h-3 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-3 h-3 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="mb-8 text-center">
                            <div className="text-5xl mb-4 animate-bounce-slow">✈️</div>
                            <h2 className="text-3xl font-bold mb-2">Plan Your Dream Trip</h2>
                            <p className="text-gray-400">Step {currentStep} of 3</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between mb-2">
                                <span className={`text-sm ${currentStep >= 1 ? 'text-slate-400' : 'text-gray-600'}`}>Contact</span>
                                <span className={`text-sm ${currentStep >= 2 ? 'text-slate-400' : 'text-gray-600'}`}>Trip Details</span>
                                <span className={`text-sm ${currentStep >= 3 ? 'text-slate-400' : 'text-gray-600'}`}>Preferences</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-slate-500 to-slate-700 transition-all duration-500"
                                    style={{ width: `${(currentStep / 3) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Step 1: User Details */}
                            {currentStep === 1 && (
                                <div className="space-y-6 animate-fade-in">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            placeholder="e.g., John Doe"
                                            className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                        />
                                    </div>

                                    {/* Email & Mobile */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Email <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="e.g., john@example.com"
                                                className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Mobile Number <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                required
                                                placeholder="e.g., +1 234 567 8900"
                                                className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                            />
                                        </div>
                                    </div>



                                    {/* Next Button */}
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="w-full py-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 border border-slate-600 hover:scale-105"
                                    >
                                        Next Step →
                                    </button>
                                </div>
                            )}

                            {/* Step 2: Trip Details */}
                            {currentStep === 2 && (
                                <div className="space-y-6 animate-fade-in">
                                    {/* Origin & Destination */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Origin <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="origin"
                                                value={formData.origin}
                                                onChange={handleChange}
                                                required
                                                placeholder="e.g., Erode"
                                                className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Destination <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="destination"
                                                value={formData.destination}
                                                onChange={handleChange}
                                                required
                                                placeholder="e.g., Chennai"
                                                className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Dates */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Departure Date <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                name="departure"
                                                value={formData.departure}
                                                onChange={handleChange}
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Return Date <span className="text-red-400">*</span>
                                            </label>
                                            <input
                                                type="date"
                                                name="return"
                                                value={formData.return}
                                                onChange={handleChange}
                                                required
                                                min={formData.departure || new Date().toISOString().split('T')[0]}
                                                className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="flex-1 py-4 bg-white/5 border border-slate-600 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                                        >
                                            ← Back
                                        </button>
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="flex-1 py-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 border border-slate-600 hover:scale-105"
                                        >
                                            Next Step →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Preferences & Budget */}
                            {currentStep === 3 && (
                                <div className="space-y-6 animate-fade-in">
                                    {/* Travelers Section */}
                                    <div className="bg-white/5 p-6 rounded-xl border border-slate-600">
                                        <h3 className="text-xl font-semibold mb-4">👥 Travelers</h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Adults</label>
                                                <input
                                                    type="number"
                                                    name="adults"
                                                    value={formData.adults}
                                                    onChange={handleChange}
                                                    min="1"
                                                    className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Children</label>
                                                <input
                                                    type="number"
                                                    name="children"
                                                    value={formData.children}
                                                    onChange={handleChange}
                                                    min="0"
                                                    className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Infants</label>
                                                <input
                                                    type="number"
                                                    name="infants"
                                                    value={formData.infants}
                                                    onChange={handleChange}
                                                    min="0"
                                                    className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-sm font-medium mb-2">Group Type</label>
                                            <select
                                                name="groupType"
                                                value={formData.groupType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-black text-white border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                                style={{ colorScheme: 'dark' }}
                                            >
                                                <option value="family">Family</option>
                                                <option value="friends">Friends</option>
                                                <option value="couple">Couple</option>
                                                <option value="solo">Solo</option>
                                                <option value="business">Business</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Budget Section */}
                                    <div className="bg-white/5 p-6 rounded-xl border border-slate-600">
                                        <h3 className="text-xl font-semibold mb-4">💰 Budget</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    Amount <span className="text-red-400">*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    value={formData.amount}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="e.g., 5000"
                                                    min="1"
                                                    className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Currency</label>
                                                <select
                                                    name="currency"
                                                    value={formData.currency}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 bg-black text-white border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                                    style={{ colorScheme: 'dark' }}
                                                >
                                                    <option value="USD">USD ($)</option>
                                                    <option value="EUR">EUR (€)</option>
                                                    <option value="GBP">GBP (£)</option>
                                                    <option value="INR">INR (₹)</option>
                                                    <option value="JPY">JPY (¥)</option>
                                                    <option value="AUD">AUD ($)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accommodation */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Accommodation Preference
                                        </label>
                                        <select
                                            name="accommodation"
                                            value={formData.accommodation}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black text-white border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors"
                                            style={{ colorScheme: 'dark' }}
                                        >
                                            <option value="any">Any</option>
                                            <option value="hotel">Hotel</option>
                                            <option value="resort">Resort</option>
                                            <option value="hostel">Hostel</option>
                                            <option value="villa">Villa</option>
                                            <option value="apartment">Apartment</option>
                                        </select>
                                    </div>

                                    {/* Interests */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Interests & Activities
                                        </label>
                                        <textarea
                                            name="interests"
                                            value={formData.interests}
                                            onChange={handleChange}
                                            placeholder="Tell us what you'd like to do..."
                                            rows="3"
                                            className="w-full px-4 py-3 bg-white/5 border border-slate-600 rounded-xl focus:outline-none focus:border-slate-400 transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="flex-1 py-4 bg-white/5 border border-slate-600 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                                        >
                                            ← Back
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`flex-1 py-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 border border-slate-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </span>
                                            ) : submitStatus === 'success' ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    ✓ Submitted Successfully!
                                                </span>
                                            ) : submitStatus === 'error' ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    ✗ Error - Please Try Again
                                                </span>
                                            ) : (
                                                'Create My Travel Plan ✨'
                                            )}
                                        </button>
                                    </div>

                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="text-center text-green-400 text-sm animate-fade-in">
                                            Your travel plan request has been submitted successfully! 🎉
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="text-center text-red-400 text-sm animate-fade-in">
                                            Failed to submit. Please check your connection and try again.
                                        </div>
                                    )}
                                </div>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default TravelPlanForm;

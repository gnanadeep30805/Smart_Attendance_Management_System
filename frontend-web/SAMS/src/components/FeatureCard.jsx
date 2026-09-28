import { Link } from 'react-router-dom';

export default function FeatureCard() {
    const features = [
    {
        title: "Attendance Tracking",
        description: "Record and monitor student attendance."
    },
    {
        title: "Student Management",
        description: "Manage student information efficiently."
    },
    {
        title: "Reports",
        description: "View attendance information and reports."
    }
    ];

    return (
            <main>
                <section id="featurecard">
                    <h2>Features</h2>
                    <div>
                        {features.map((feature) => (
                            <article key={feature.title}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </article>
                        ))}
                    </div>  
                </section>
            </main>
    );
}
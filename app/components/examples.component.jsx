const React = require('react');
const { Link } = require('react-router');

const Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a some examples:</p>
            <ol>
                <li>
                    <Link to='/?location=Portland,state=OR'>Portland, OR</Link>
                </li>
                <li>
                    <Link to='/?location=Portland,state=ME'>Portland, ME</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
const React = require('react');
const { Link } = require('react-router');

const Examples = () => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a some examples:</p>
            <ol>
                <li>
                    <Link to='/?location=Lake Oswego&state=OR'>Lake Oswego, OR</Link>
                </li>
                <li>
                    <Link to='/?location=Portland&state=OR'>Portland, OR</Link>
                </li>
                <li>
                    <Link to='/?location=Portland&state=ME'>Portland, ME</Link>
                </li>
                <li>
                    <Link to='/?location=Orrs Island&state=ME'>Orrs Island, ME</Link>
                </li>
                <li>
                    <Link to='/?location=Hanover&state=NH'>Hanover, NH</Link>
                </li>
                <li>
                    <Link to='/?location=Littleton&state=NH'>Littleton, NH</Link>
                </li>
                <li>
                    <Link to='/?location=Burlington&state=VT'>Burlington, VT</Link>
                </li>
                <li>
                    <Link to='/?location=Galva&state=IL'>Galva, IL</Link>
                </li>
                <li>
                    <Link to='/?location=Eldorado&state=IL'>Eldorado, IL</Link>
                </li>
                <li>
                    <Link to='/?location=Naperville&state=IL'>Naperville, IL</Link>
                </li>
                <li>
                    <Link to='/?location=Evansville&state=IN'>Evansville, IN</Link>
                </li>
                <li>
                    <Link to='/?location=Madison&state=WI'>Madison, WI</Link>
                </li>
                <li>
                    <Link to='/?location=Green Bay&state=WI'>Green Bay, WI</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
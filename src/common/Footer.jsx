const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <div className="w-7/10 mx-auto">
                    <div className="flex justify-between items-center w-full px-6 py-4">
                    <p>
                        DevDesk <span className="text-green-400">.dev</span> — a gallery of developer workspaces
                    </p>
                    <p>
                        Photos submitted by the community. Gear links never affiliate.
                    </p>
                </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
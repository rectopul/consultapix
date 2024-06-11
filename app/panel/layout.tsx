export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <html>
            <body className="bg-black">{children}</body>
        </html>
    );
}

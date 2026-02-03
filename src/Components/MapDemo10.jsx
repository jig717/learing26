import React from 'react'

export const MapDemo10 = () => {
    const productData = [
        { id: 1, name: "Laptop", category: "Electronics", price: 999, stock: 15, image: "https://via.placeholder.com/100?text=Laptop", status: "In Stock" },
        { id: 2, name: "Smartphone", category: "Electronics", price: 699, stock: 0, image: "", status: "Out of Stock" },
        { id: 3, name: "Headphones", category: "Audio", price: 199, stock: 25, image: "https://via.placeholder.com/100?text=Headphones", status: "In Stock" },
        { id: 4, name: "Tablet", category: "Electronics", price: 499, stock: 5, image: "https://via.placeholder.com/100?text=Tablet", status: "Low Stock" },
        { id: 5, name: "Monitor", category: "Accessories", price: 299, stock: 0, image: "", status: "Out of Stock" },
        { id: 6, name: "Keyboard", category: "Accessories", price: 79, stock: 50, image: "https://via.placeholder.com/100?text=Keyboard", status: "In Stock" },
    ];

    const getRowStyle = (item) => {
        if (item.stock === 0) {
            return { backgroundColor: "#ffcccc", color: "#d32f2f", fontWeight: "bold" };
        }
        if (item.stock < 10 && item.stock > 0) {
            return { backgroundColor: "#fff9c4", color: "#f57f17" };
        }
        if (item.stock >= 25) {
            return { backgroundColor: "#c8e6c9", color: "#388e3c" };
        }
        return { backgroundColor: "white" };
    };

    const getCategoryStyle = (category) => {
        switch (category) {
            case "Electronics":
                return { backgroundColor: "#e3f2fd", color: "#1565c0", fontWeight: "500" };
            case "Audio":
                return { backgroundColor: "#f3e5f5", color: "#6a1b9a", fontWeight: "500" };
            case "Accessories":
                return { backgroundColor: "#fff3e0", color: "#e65100", fontWeight: "500" };
            default:
                return {};
        }
    };

    const getPriceColor = (price) => {
        if (price > 500) return "#d32f2f";
        if (price > 200) return "#f57f17";
        return "#388e3c";
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ textAlign: 'center', color: "#333" }}>Product Inventory Table</h2>
            <table border={1} style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>
                <thead>
                    <tr style={{ backgroundColor: "#333", color: "white", textAlign: "center" }}>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>ID</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Product Name</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Category</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Price ($)</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Image</th>
                        <th style={{ padding: "12px", border: "1px solid #ddd" }}>Stock Status</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((item) => (
                        <tr key={item.id} style={getRowStyle(item)}>
                            <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd" }}>
                                {item.id}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {item.name}
                            </td>
                            <td style={{ padding: "10px", border: "1px solid #ddd", ...getCategoryStyle(item.category) }}>
                                {item.category}
                            </td>
                            <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", color: getPriceColor(item.price), fontWeight: "bold" }}>
                                ${item.price}
                            </td>
                            <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd" }}>
                                {item.image ? (
                                    <img src={item.image} alt={item.name} width="80" height="80" style={{ borderRadius: "4px" }} />
                                ) : (
                                    <span style={{ color: "#d32f2f", fontWeight: "bold" }}>❌ Image is missing...</span>
                                )}
                            </td>
                            <td style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", fontWeight: "bold" }}>
                                {item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

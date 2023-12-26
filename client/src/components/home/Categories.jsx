import { Button, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import categories from "../../constants/categoryData"
import { useNavigate, Link, useSearchParams } from "react-router-dom";

const Categories = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
    <>
        <Button 
            variant="contained" 
            style={{
                margin: "20px",
                width: "85%",
                backgroundColor: "#6495ED",
                color: "#FFF"
            }}
            onClick={() => {
                navigate(`/create?category=${category || ''}`);
            }}
            > 
            Create Blog 
        </Button>
        <Table style={{
                border: "2px solid rgba(224, 224, 244, 1)"
            }}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                            All Categories
                        </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                categories.map(category => 
                    <TableRow key={category.id}>
                        <TableCell> 
                            <Link to={`/?category=${category.type}`} style={{textDecoration: "none", color: "inherit"}}>
                                {category.type}
                            </Link> 
                        </TableCell>
                    </TableRow>
                )
            }
            </TableBody>
        </Table>
    </>
    )
}

export default Categories;
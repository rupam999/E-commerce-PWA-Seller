import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Checkbox, Upload } from "antd";
import { Drawer } from "antd-mobile";
import { UploadOutlined } from "@ant-design/icons";
import { HomeScreenHeader } from "../Header";
import WindowDimensions from "../../../components/WindowDimensions";
import DrawerContent from "./components/DrawerContent";
import { getCategories } from "../../../api/getCategories";
import { addNewProduct } from "../../../api/addNewProduct";
import Colors from "../../../utils/Colors";
import "./css/AddNewProductStyle.css";
import Success from "../components/Success";
const { Option } = Select;

export const AddNewProduct = () => {
    const [menu, toggle] = useState(false);
    const [error, setError] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [allCategoriesData, setAllCategoriesData] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [choosenCategory, setChoosenCategory] = useState("");
    const [choosenSubCategory, setChoosenSubCategory] = useState("");
    const { width } = WindowDimensions();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    useEffect(() => {
        getCategories()
            .then((res) => {
                if (res !== 1) {
                    setAllCategoriesData(res);
                    setCategory(
                        res.map((item) => {
                            return item.category;
                        })
                    );
                } else {
                    console.log("ERROR");
                }
            })
            .catch();
    }, []);

    const handleProductCategory = (value) => {
        setChoosenCategory(value);
        const categoryIndex = allCategoriesData.findIndex(
            (item) => item.category === value
        );
        const subCategoryData =
            categoryIndex === -1
                ? []
                : allCategoriesData[categoryIndex].sub_category.split(",");
        setSubCategory(subCategoryData);
    };

    const handleProductSubCategory = (value) => setChoosenSubCategory(value);

    const onFinish = async (values) => {
        values.productCategory = choosenCategory;
        values.productSubCategory = choosenSubCategory;
        if (values.productCategory !== "" && values.productSubCategory) {
            const productResponse = await addNewProduct(values);
            if (productResponse === 1) {
                setShowSuccess(true);
            } else {
                setError("Please check the category or sub-category");
            }
        } else {
            setError("Please check the category or sub-category");
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onOpenChange = () => {
        toggle(!menu);
    };

    const sidebar = (
        <div style={{ width: width * 0.75, maxWidth: 290 }}>
            <DrawerContent />
        </div>
    );

    return (
        <div
            style={{
                width: "100%",
                minHeight: "100%",
            }}
        >
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle
                sidebar={sidebar}
                open={menu}
                onOpenChange={onOpenChange}
            >
                <HomeScreenHeader
                    topPadding={true}
                    menu={menu}
                    toggle={toggle}
                    pageHeading="Add New Product"
                />
                <div
                    className="extraHeader"
                    style={{ backgroundColor: Colors.darkBlue() }}
                ></div>
                <div
                    className="mainContent"
                    style={{ backgroundColor: Colors.white() }}
                >
                    {showSuccess ? (
                        <Success />
                    ) : (
                        <div
                            style={{ zIndex: 1, paddingBottom: 150 }}
                            className="addNewProductForm"
                        >
                            <div className="formHeading">
                                <h3>Just fill the details and it's done!</h3>
                                <p
                                    style={{ color: Colors.buttonRed() }}
                                    className="errorText"
                                >
                                    {error ? error : null}
                                </p>
                            </div>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{
                                    organicProduct: false,
                                    vegProduct: false,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    name="productName"
                                    style={{ width: "100%" }}
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter a product name",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="default"
                                        size="large"
                                        placeholder="&nbsp;Product Name"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Select
                                    placeholder="Product Category"
                                    style={{
                                        width: "100%",
                                        marginBottom: 24,
                                        height: 32,
                                    }}
                                    onChange={handleProductCategory}
                                >
                                    {category.map((catName, index) => (
                                        <Option key={index} value={catName}>
                                            {catName}
                                        </Option>
                                    ))}
                                </Select>

                                <Select
                                    placeholder="Product Sub-Category"
                                    style={{
                                        width: "100%",
                                        marginBottom: 24,
                                        height: 32,
                                    }}
                                    onChange={handleProductSubCategory}
                                >
                                    {subCategory.map((subCat, index) => (
                                        <Option key={index} value={subCat}>
                                            {subCat}
                                        </Option>
                                    ))}
                                </Select>

                                <Form.Item
                                    name="productPrice"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter the price!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="number"
                                        size="large"
                                        placeholder="&nbsp;Product Price"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="productMRP"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter the MRP!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="number"
                                        size="large"
                                        placeholder="&nbsp;Product MRP"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Upload>
                                    <Button
                                        icon={<UploadOutlined />}
                                        className="uploadImage"
                                    >
                                        Click to Upload Product Image
                                    </Button>
                                </Upload>

                                <Form.Item
                                    name="organicProduct"
                                    valuePropName="checked"
                                    style={{ marginBottom: 5 }}
                                >
                                    <Checkbox>Organic Product</Checkbox>
                                </Form.Item>

                                <Form.Item
                                    name="vegProduct"
                                    valuePropName="checked"
                                    style={{}}
                                >
                                    <Checkbox>100% Veg</Checkbox>
                                </Form.Item>

                                <Form.Item
                                    name="productQuantity"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter the Auantity!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="default"
                                        size="large"
                                        placeholder="&nbsp;Product Quantity"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter Product Description!",
                                        },
                                    ]}
                                    name="productDescription"
                                >
                                    <Input.TextArea
                                        placeholder="&nbsp;Product Description"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <h2 className="productInformationHeading">
                                    Product Information
                                </h2>
                                <Form.Item
                                    name="brandName"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter Brand name!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="default"
                                        size="large"
                                        placeholder="&nbsp;Brand"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="manufacturer"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter product Manufacturer",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="default"
                                        size="large"
                                        placeholder="&nbsp;Manufacturer"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="countryOfOrigin"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter country of Origin!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="default"
                                        size="large"
                                        placeholder="&nbsp;Country of Origin"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="productExpiry"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter a Expiry Date!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="default"
                                        size="large"
                                        placeholder="&nbsp;Expiry Date"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="manufacturerEmail"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter Manufacturer Email!",
                                        },
                                    ]}
                                >
                                    <Input
                                        type="email"
                                        size="large"
                                        placeholder="&nbsp;Manufacturer Email"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter Product Keywords!",
                                        },
                                    ]}
                                    name="productKeywords"
                                >
                                    <Input.TextArea
                                        placeholder="&nbsp;Product Keywords (use comma)"
                                        style={{
                                            width: "100%",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="submitBtn"
                                        style={{
                                            backgroundColor: Colors.buttonRed(),
                                        }}
                                    >
                                        Send for Review
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    )}
                </div>
            </Drawer>
        </div>
    );
};

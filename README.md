# JSON Syntax Formatter

**Overview:**  
JSON Syntax Formatter is a simple web-based tool that takes input in the form of name-value pairs and formats it into valid JSON syntax.

**Usage:**  

1. Open the provided HTML file in your web browser.

2. In the **Input JSON Data** textbox, enter your data in the following format:
```
name1:value1
name2:value2
```
###or
```
name1|value1
name2|value2
```
3. Click the **Format** button.

4. The tool will format the data into JSON syntax, and the result will be displayed in the **Formatted JSON Output** textbox.
```JSON   
{
"name1": "value1",
"name2": "value2"
}
```

5. To copy the formatted JSON to your clipboard, click the **Copy to Clipboard** button.

**Example:**

**Input JSON Data:**
```
first_name:John
last_name:Doe
age:30
```
**Formatted JSON Output:**
```JSON
{
"first_name": "John",
"last_name": "Doe",
"age": 30
}
```

**Technologies Used:**

This tool is developed using the following technologies:

- HTML
- CSS
- JavaScript

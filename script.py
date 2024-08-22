import os

def read_files_in_directory(directory):
    file_contents = []
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".js") or file.endswith(".jsx") or file.endswith(".ts") or file.endswith(".tsx") or file.endswith(".html") or file.endswith(".css"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    file_contents.append(f"\n\n=== {file} ===\n\n")
                    file_contents.append(content)
    
    return file_contents

def write_to_single_file(contents, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        for content in contents:
            f.write(content)

if __name__ == "__main__":
    react_app_directory = 'C:/Users/BHUPENDER SINGH/Desktop/node-portal'  # Replace with the path to your React app
    output_file = 'all_files_content.txt'
    
    file_contents = read_files_in_directory(react_app_directory)
    write_to_single_file(file_contents, output_file)
    
    print(f"All files have been read and written to {output_file}")

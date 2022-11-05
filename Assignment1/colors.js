let colorsList = [
    {Name: "White","Code":"#FFFFFF"},
    {Name: "Red","Code":"#FF0000"},
    {Name: "Lime","Code":"#00FF00"},
    {Name: "Blue","Code":"#0000FF"},
    {Name: "Yellow","Code":"#FFFF00"},
    {Name: "Cyan / Aqua","Code":"#00FFFF"},
    {Name: "Magenta / Fuchsia","Code":"#FF00FF"},
    {Name: "Silver","Code":"#C0C0C0"},
    {Name: "Gray","Code":"#808080"},
    {Name: "Maroon","Code":"#800000"},
    {Name: "Olive","Code":"#808000"},
    {Name: "Green","Code":"#008000"},
    {Name: "Purple","Code":"#800080"},
    {Name: "Teal","Code":"#008080"},
    {Name: "Navy","Code":"#000080"},
    {Name: "dark red","Code":"#8B0000"},
    {Name: "brown","Code":"#A52A2A"},
    {Name: "firebrick","Code":"#B22222"},
    {Name: "crimson","Code":"#DC143C"},
    {Name: "tomato","Code":"#FF6347"},
    {Name: "coral","Code":"#FF7F50"},
    {Name: "indian red","Code":"#CD5C5C"},
    {Name: "light coral","Code":"#F08080"},
    {Name: "dark salmon","Code":"#E9967A"},
    {Name: "salmon","Code":"#FA8072"},
    {Name: "light salmon","Code":"#FFA07A"},
    {Name: "orange red","Code":"#FF4500"},
    {Name: "dark orange","Code":"#FF8C00"},
    {Name: "orange","Code":"#FFA500"},
    {Name: "gold","Code":"#FFD700"},
    {Name: "dark golden rod","Code":"#B8860B"},
    {Name: "golden rod","Code":"#DAA520"},
    {Name: "pale golden rod","Code":"#EEE8AA"},
    {Name: "dark khaki","Code":"#BDB76B"},
    {Name: "khaki","Code":"#F0E68C"},
    {Name: "yellow green","Code":"#9ACD32"},
    {Name: "dark olive green","Code":"#556B2F"},
    {Name: "olive drab","Code":"#6B8E23"},
    {Name: "lawn green","Code":"#7CFC00"},
    {Name: "dark green","Code":"#006400"},
    {Name: "forest green","Code":"#228B22"},
    {Name: "lime green","Code":"#32CD32"},
    {Name: "light green","Code":"#90EE90"},
    {Name: "pale green","Code":"#98FB98"},
    {Name: "dark sea green","Code":"#8FBC8F"},
    {Name: "medium spring green","Code":"#00FA9A"},
    {Name: "spring green","Code":"#00FF7F"},
    {Name: "sea green","Code":"#2E8B57"},
    {Name: "medium aqua marine","Code":"#66CDAA"},
    {Name: "medium sea green","Code":"#3CB371"},
    {Name: "light sea green","Code":"#20B2AA"},
    {Name: "dark slate gray","Code":"#2F4F4F"},
    {Name: "dark cyan","Code":"#008B8B"},
    {Name: "aqua","Code":"#E0FFFF"},
    {Name: "cyan","Code":"#00CED1"},
    {Name: "light cyan","Code":"#40E0D0"},
    {Name: "dark turquoise","Code":"#48D1CC"},
    {Name: "turquoise","Code":"#AFEEEE"},
    {Name: "medium turquoise","Code":"#7FFFD4"},
    {Name: "pale turquoise","Code":"#B0E0E6"},
    {Name: "aqua marine","Code":"#5F9EA0"},
    {Name: "powder blue","Code":"#4682B4"},
    {Name: "cadet blue","Code":"#6495ED"},
    {Name: "steel blue","Code":"#00BFFF"},
    {Name: "corn flower blue","Code":"#1E90FF"},
    {Name: "deep sky blue","Code":"#ADD8E6"},
    {Name: "dodger blue","Code":"#87CEEB"},
    {Name: "light blue","Code":"#87CEFA"},
    {Name: "sky blue","Code":"#191970"},
    {Name: "light sky blue","Code":"#00008B"},
    {Name: "midnight blue","Code":"#0000CD"},
    {Name: "dark blue","Code":"#4169E1"},
    {Name: "medium blue","Code":"#8A2BE2"},
    {Name: "royal blue","Code":"#4B0082"},
    {Name: "blue violet","Code":"#483D8B"},
    {Name: "indigo","Code":"#6A5ACD"},
    {Name: "dark slate blue","Code":"#7B68EE"},
    {Name: "slate blue","Code":"#9370DB"},
    {Name: "medium slate blue","Code":"#8B008B"},
    {Name: "medium purple","Code":"#9400D3"},
    {Name: "dark magenta","Code":"#9932CC"},
    {Name: "dark violet","Code":"#BA55D3"},
    {Name: "dark orchid","Code":"#D8BFD8"},
    {Name: "medium orchid","Code":"#DDA0DD"},
    {Name: "thistle","Code":"#EE82EE"},
    {Name: "plum","Code":"#DA70D6"},
    {Name: "violet","Code":"#C71585"},
    {Name: "orchid","Code":"#DB7093"},
    {Name: "medium violet red","Code":"#FF1493"},
    {Name: "pale violet red","Code":"#FF69B4"},
    {Name: "deep pink","Code":"#FFB6C1"},
    {Name: "hot pink","Code":"#FFC0CB"},
    {Name: "light pink","Code":"#FAEBD7"},
    {Name: "pink","Code":"#F5F5DC"},
    {Name: "antique white","Code":"#FFE4C4"},
    {Name: "beige","Code":"#FFEBCD"},
    {Name: "bisque","Code":"#F5DEB3"},
    {Name: "blanched almond","Code":"#FFF8DC"},
    {Name: "wheat","Code":"#FFFACD"},
    {Name: "corn silk","Code":"#FAFAD2"},
    {Name: "lemon chiffon","Code":"#FFFFE0"},
    {Name: "light golden rod yellow","Code":"#8B4513"},
    {Name: "light yellow","Code":"#A0522D"},
    {Name: "saddle brown","Code":"#D2691E"},
    {Name: "sienna","Code":"#CD853F"},
    {Name: "chocolate","Code":"#F4A460"},
    {Name: "peru","Code":"#DEB887"},
    {Name: "sandy brown","Code":"#D2B48C"},
    {Name: "burly wood","Code":"#BC8F8F"},
    {Name: "tan","Code":"#FFE4B5"},
    {Name: "rosy brown","Code":"#FFDEAD"},
    {Name: "moccasin","Code":"#FFDAB9"},
    {Name: "navajo white","Code":"#FFE4E1"},
    {Name: "peach puff","Code":"#FFF0F5"},
    {Name: "misty rose","Code":"#FAF0E6"},
    {Name: "lavender blush","Code":"#FDF5E6"},
    {Name: "linen","Code":"#FFEFD5"},
    {Name: "old lace","Code":"#FFF5EE"},
    {Name: "papaya whip","Code":"#F5FFFA"},
    {Name: "sea shell","Code":"#708090"},
    {Name: "mint cream","Code":"#778899"},
    {Name: "slate gray","Code":"#B0C4DE"},
    {Name: "light slate gray","Code":"#E6E6FA"},
    {Name: "light steel blue","Code":"#FFFAF0"},
    {Name: "lavender","Code":"#F0F8FF"},
    {Name: "floral white","Code":"#F8F8FF"},
    {Name: "alice blue","Code":"#F0FFF0"},
    {Name: "ghost white","Code":"#FFFFF0"},
    {Name: "honeydew","Code":"#F0FFFF"},
    {Name: "ivory","Code":"#FFFAFA"},
    {Name: "azure","Code":"#000000"},
    {Name: "snow","Code":"#696969"},
    {Name: "black","Code":"#A9A9A9"},
    {Name: "dim gray","Code":"#D3D3D3"},
    {Name: "gray ","Code":"#DCDCDC"},
    {Name: "dark gray","Code":"#F5F5F5"}
]

export {colorsList};
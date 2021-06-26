var presentPassVertexShaderSource = 
    `#version 300 es
    in vec4 vertex_position;
    in vec2 vertex_uvs;
    out vec2 frag_uvs;
    void main() 
    {
        gl_Position = vertex_position;
        frag_uvs = vertex_uvs;
    }`

var presentPassFragmentShaderHeaderSource = 
    `#version 300 es
    precision highp float;
    uniform sampler2D AABuffer;
    uniform float Time;

    in vec2 frag_uvs;
    out vec4 out_color;
`

var presentPassFragmentShaderFooterSource = `
    void main() 
    {
        out_color = texture(AABuffer, frag_uvs) / Time;
    }`
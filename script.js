const tarefas = [
    {
      titulo: "controle financeiro",
      descricao: "Sistema financeiro com controle de receitas e despesas, filtros mensais, gráficos dinâmicos e exportação de pdf.",
      status: "concluido",
      frameWork: "não",
      tecnologia: [{tec1:"HTML ✅", tec2:"CSS ✅", tec3:"javaScript ✅", tec4:"React ❌"}],
      subtarefas: [
        { titulo: "Mobile first", concluida: false },
        { titulo: "Grid para telas grandes", concluida: true }
      ]
    },
    {
      titulo: "primeira versão do portifólio",
      descricao: "primeira versão do meu porifólio, explicando algumas coisas e falando um pouco sobre mim",
      status: "pendente",
      frameWork: "sim",
      tecnologia: [{tec1:"HTML ✅", tec2:"CSS ✅", tec3:"javaScript ✅", tec4:"React ✅"}],
      subtarefas: [
        { titulo: "Mobile first", concluida: false},
        { titulo: "Grid para telas grandes", concluida: true }
      ]
    },
    {
      titulo: "clone da página de log in/out do instagram",
      descricao: "a página simula a pagina o login de um jeito parecido co a 'to-do list'",
      status: "concluido",
      frameWork: "não",
      tecnologia: [{tec1:"HTML ✅", tec2:"CSS ✅", tec3:"javaScript ✅", tec4:"React ❌"}],
      subtarefas: [
        { titulo: "Mobile first", concluida: false},
        { titulo: "Grid para telas grandes", concluida: true }
      ]
    },
    {
      titulo: "pagina de vendas do gta V",
      descricao: "página que simulava o site de vendas do gta V, foi um dos primeiros projetos que fiz",
      status: "concluido",
      frameWork: "não",
      tecnologia: [{tec1:"HTML ✅", tec2:"CSS ✅", tec3:"javaScript ✅", tec4:"React ❌"}],
      subtarefas: [
        { titulo: "Mobile first", concluida: false},
        { titulo: "Grid para telas grandes", concluida: true }
      ]
    },
    {
      titulo: "primeira versão do portifólio",
      descricao: "primeira versão do meu porifólio, explicando algumas coisas e falando um pouco sobre mim",
      status: "concluido",
      frameWork: "sim",
      tecnologia: [{tec1:"HTML ✅", tec2:"CSS ✅", tec3:"javaScript ✅", tec4:"React ✅"}],
      subtarefas: [
        { titulo: "Mobile first", concluida: false},
        { titulo: "Grid para telas grandes", concluida: true }
      ]
    },
    {
      titulo: "projeto de busca",
      descricao: "esta é a página que você está agora que faz um filtro de busca sobre meus projetos ela será sempre atualizada, sempre que eu fizer novos projetos",
      status: "em-andamento",
      frameWork: "não",
      tecnologia: [{tec1:"HTML ✅", tec2:"CSS ✅", tec3:"javaScript ✅", tec4:"React ❌"}],
      subtarefas: [
        { titulo: "Mobile first", concluida: false},
        { titulo: "Grid para telas grandes", concluida: true }
      ]
    }
  ]
  function first(){
    const termo = document.getElementById("busca").value.toLowerCase()
    const status = document.getElementById("status").value
    const frameWork = document.getElementById("frameWork").value

    const filtrados = tarefas.filter(tar=>{
      const search = tar.titulo.toLowerCase().includes(termo)
      const stasel = status ? tar.status.includes(status) : true
      const prisel = frameWork ? tar.frameWork.includes(frameWork) : true

      return search && stasel && prisel;
    })

    exibirProjetos(filtrados)

  }

  function exibirProjetos(filtrados){
    const container = document.getElementById("mostrarProjetos")
    if(filtrados.length === 0){
      container.innerHTML=`
      <p>Nada encontrado</p>
      `;

      return;
    }

    container.innerHTML = filtrados.map(fil=>`
      <div class="proj">
       <h3>${fil.titulo}</h3>
       <p><b>Descrição:</b> ${fil.descricao}</p>
       <p><b>Status:</b> <i class="${fil.status}">${fil.status}</i></p>
       <p><b>Framework:</b> ${fil.frameWork}</p>
       <p><b>Tecnologias:</b> ${fil.tecnologia.map(tec=>`
        <div class="div-tec">
        <p>${tec.tec1}</p>
        <p>${tec.tec2}</p>
        <p>${tec.tec3}</p>
        <p>${tec.tec4}</>
        `)}</p>
        </div>
       <h4>subtarefas:</h4>
       <p>
       ${fil.subtarefas.map(sub=>`
        <p><b>${sub.titulo}</b> - <b>${sub.concluida ? "✅" : "❌"}</b></p>`).join("")}
       </p>
       </div>
      `).join("")
  }

  exibirProjetos(tarefas)
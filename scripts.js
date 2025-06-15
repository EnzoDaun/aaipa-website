document.addEventListener("DOMContentLoaded", () => {
  const modals = {
    "modal-sobre": {
      title: "Mais detalhes sobre a AAIPA",
      html: `
        <p>
          A AAIPA atua desde 2011 resgatando animais abandonados de situações de
          dor e sofrimento, proporcionando atendimento veterinário, alimentação
          adequada, cirurgias/tratamentos de diversos tipos, castrações e
          acomodações respeitando tamanho e índole de cada animal.
        </p>
        <h4>Qualificações</h4>
        <p>
          Instituição sem fins lucrativos, a AAIPA foi declarada de
          <strong>Utilidade Pública Municipal</strong> através da Lei Municipal nº
          3184/2011 de 29/03/2011. Certificada no CRCE sob nº 0247/2014.
        </p>
        <h4>Atividades Principais</h4>
        <ul>
          <li>Participação em eventos educativos (Palestras, congressos, fóruns) sobre Bem-Estar Animal</li>
          <li>Apoio ao CRAS de Itapeva com adolescentes incentivando o voluntariado</li>
          <li>Participação anual na Cãominhada promovida pelo Instituto Planeta Terra e a Prefeitura Municipal</li>
          <li>Realização de Mutirões de Castração com utilização de Castramóvel</li>
          <li>Suporte a educadores com apostilas educativas para crianças entre 5 a 12 anos</li>
          <li>Campanha de coleta de tampinhas plásticas para reverter em castração</li>
        </ul>
        <h4>Situação Atual</h4>
        <p>
          A entidade atualmente está com número bem reduzido por ordem da prefeitura para não abrigarmos mais tantos animais, porém, os trabalhos não param. Cuidamos de animais de tutores de baixa renda que não têm condições de fazer tratamentos, levando estes animais para a FMVZ de Botucatu onde temos cadastro para todos os tipos de procedimentos.
        </p>
      `,
    },
    "modal-adocao": {
      title: "Detalhes sobre “Para Adoção”",
      html: `
        <p>
          A AAIPA oferece um lar temporário para cães e gatos resgatados de situações de dor, sofrimento e maus-tratos. Todos os animais são:
        </p>
        <ul>
          <li>Castrados e microchipados (quando a idade permite);</li>
          <li>Recolocados em famílias amorosas e responsáveis;</li>
          <li>Recebem atendimento veterinário, alimentação adequada e, se necessário, tratamento prolongado;</li>
          <li>Animais idosos e deficientes que não encontram adoção podem permanecer na entidade.</li>
        </ul>
        <p>Para adotar, o interessado deve:</p>
        <ul>
          <li>Preencher formulário de adoção no abrigo;</li>
          <li>Apresentar documentos pessoais e comprovante de residência;</li>
          <li>Assinar termo de responsabilidade, comprometendo-se a cuidar bem do pet.</li>
        </ul>
      `,
    },
    "modal-adotados": {
      title: "Animais Adotados em 2024",
      html: `
        <p>
          Em 2024, a AAIPA celebrou centenas de adoções bem-sucedidas, graças à parceria com ONGs locais, eventos de adoção e voluntários dedicados:
        </p>
        <ul>
          <li>Campanhas em praças públicas, oferecendo brindes para quem adotasse;</li>
          <li>Seleção cuidadosa de famílias: entrevistas, visitas prévias e acompanhamento pós-adoção;</li>
          <li>Todos os animais doados pela entidade são castrados e, quando possível, microchipados;</li>
          <li>A adoção inclui kit inicial (ração, guias, coleiras e orientações veterinárias).</li>
        </ul>
      `,
    },
    "modal-eventos": {
      title: "Eventos e Campanhas Realizadas",
      html: `
        <ul>
          <li><strong>1º Mutirão de Castração (2010):</strong> 25 animais castrados com apoio do Deputado Ricardo Tripoli.</li>
          <li><strong>3º ENAPA (2012):</strong> Encontro Nacional de Ativistas e Protetores de Animais em São Paulo.</li>
          <li><strong>Cãominhada + Vacinação (2013):</strong> Vacinação gratuita de 280 cães contra cinomose.</li>
          <li><strong>Mutirão de Castração (2015):</strong> Em parceria com Prefeitura Municipal e Projeto Rondom.</li>
          <li><strong>Cãominhadas (2015, 2017, 2018):</strong> Instituto Planeta Terra, Prefeitura Municipal e FAIT.</li>
          <li><strong>Equipe Castramóvel (dez/2023):</strong> 332 animais castrados em 2 dias.</li>
          <li><strong>Equipe Castramóvel (abr/2024):</strong> 250 animais em um único dia.</li>
          <li><strong>Palestras de Conscientização (2022, 2024):</strong> Coleta de tampinhas plásticas em EMEI Glaucia e SESI Itapeva.</li>
        </ul>
      `,
    },
    "modal-pix": {
      title: "Doação via PIX",
      html: `
        <div class="text-center mb-4">
          <strong>Chave PIX (CNPJ):</strong><br>
          13.179.967/0001-24
        </div>
        <div id="qr-code"></div>
        <div class="text-center" style="font-size:14px;color:#5f6070;">
          Use o app do seu banco para escanear o QR Code acima.
        </div>
      `,
    },
  };

  function showModal(modalId) {
    let dialog = document.getElementById(modalId);
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.className = "modal";
      dialog.id = modalId;
      dialog.innerHTML = `
        <div class="modal-content">
          <button class="btn btn-close" data-target="${modalId}" aria-label="Fechar" type="button" style="position:fixed;top:10px;right:10px;">
            &times;
          </button>
          <h3>${modals[modalId]?.title || ""}</h3>
          ${modals[modalId]?.html || ""}
        </div>
      `;
      document.body.appendChild(dialog);
    } else {
      const modalContent = dialog.querySelector('.modal-content');
      if (modalContent) {
        modalContent.innerHTML = `
          <button class="btn btn-close" data-target="${modalId}" aria-label="Fechar" type="button" style="position:fixed;top:10px;right:10px;">
            &times;
          </button>
          <h3>${modals[modalId]?.title || ""}</h3>
          ${modals[modalId]?.html || ""}
        `;
      }
    }

    const closeBtn = dialog.querySelector(".btn-close");
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.preventDefault();
        dialog.close();
      };
    }

    dialog.onclick = (event) => {
      const content = dialog.querySelector(".modal-content");
      if (!content) return;
      const rect = content.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
        dialog.close();
      }
    };

    dialog.addEventListener("cancel", () => dialog.close());

    if (modalId === "modal-pix") {
      const pixKey = "13179967000124";
      const canvasContainer = dialog.querySelector("#qr-code");
      if (canvasContainer) {
        canvasContainer.innerHTML = "";
        const qrCanvas = document.createElement("canvas");
        canvasContainer.appendChild(qrCanvas);
        new QRious({
          element: qrCanvas,
          value: pixKey,
          size: 200,
        });
      }
    }

    dialog.showModal();
    setTimeout(() => {
      dialog.scrollTop = 0;
      const btnClose = dialog.querySelector(".btn-close");
      if (btnClose) btnClose.focus();
    }, 100);
  }

  document.querySelectorAll(".btn-modal").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("data-target");
      if (modals[targetId]) {
        showModal(targetId);
      }
    });
  });
});

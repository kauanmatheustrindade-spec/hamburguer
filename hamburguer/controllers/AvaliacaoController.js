import Avaliacao from "../models/Avaliacao.js";

const AvaliacaoController = {
    create: async (req, res) => {
        try {
            const { nota } = req.body;

            if (!nota || nota < 1 || nota > 5) {
                return res.status(400).json({ error: 'A nota precisa ser entre 1 e 5' });
            }

            const avaliacao = await Avaliacao.create(req.body);
            res.status(201).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const avaliacoes = await Avaliacao.findAll();
            if (avaliacoes.length === 0) {
                throw new Error('Nenhuma avaliacao encontrada');
            }
            res.status(200).json(avaliacoes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findById: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.findByPk(req.params.id);
            if (!avaliacao) {
                return res.status(404).json({ error: 'Avaliacao nao encontrada' });
            }
            res.status(200).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.findByPk(req.params.id);
            if (!avaliacao) {
                return res.status(404).json({ error: 'Avaliacao nao encontrada' });
            }
            await avaliacao.destroy();
            res.status(200).json({ message: 'Avaliacao deletada' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default AvaliacaoController;

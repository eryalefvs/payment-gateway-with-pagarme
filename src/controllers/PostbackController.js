import TransactionService from "../services/TransactionService";
import Transaction from "../models/Transaction";

class PostbackController {
    async pagarme(req, res) {
        const { id, object, current_status } = req.body;

        try {
            if(object === 'transaction') {
                const transaction = await Transaction.findOne({ transactionId: id});

                if (!transaction) {
                    return res.status(404).json();
                }

                const service = new TransactionService();
                service.updateStatus({
                    code: transaction.code,
                    providerStatus: current_status,
                });

                return res.status(200).json()
            }
        } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal server error." });
        }
    }
}

export default new PostbackController();